from urllib.parse import urlparse
from rest_framework import serializers
from .models import Article, Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class ArticleSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = "__all__"
        extra_kwargs = {
            "title": {"required": True},
            "body": {"required": True},
            "image_src": {"required": True},
            "image_alt": {"required": True},
            "slug": {"required": False},
        }

    def get_comments(self, obj):
        return list(obj.comments.values_list("id", flat=True))

    def validate(self, attrs):
        unknown_fields = set(self.initial_data.keys()) - set(self.fields.keys())
        if unknown_fields:
            raise serializers.ValidationError(
                f"Unknown field(s) found: {', '.join(unknown_fields)}"
            )

        original_article_url = attrs.get("original_article", {}).get("url")
        if original_article_url:
            parsed_url = urlparse(original_article_url)
            if not parsed_url.scheme or not parsed_url.netloc:
                raise serializers.ValidationError(
                    "original_article.url must be a valid full URL."
                )

        return attrs
