# from datetime import datetime
from rest_framework import serializers
from .models import Article, Comment

class ArticleSerializer(serializers.ModelSerializer):
    # published_date = serializers.DateTimeField(default=datetime.now, read_only=True)

    class Meta:
        model = Article
        fields = ('id', 'title', 'body', 'image_src', 'image_alt', 'author_name', 'author_image_src', 'published_date', 'original_article')

class CommentSerializer(serializers.ModelSerializer):
    # published_date = serializers.DateTimeField(default=datetime.now, read_only=True)
    class Meta:
        model = Comment
        fields = ('article', 'comment', 'author_name', 'author_image_src', 'published_date')