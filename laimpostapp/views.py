from rest_framework import viewsets, permissions
from .models import Article, Comment
from .serializers import ArticleSerializer, CommentSerializer
from .permissions import IsOwnerOrReadOnly
import requests
import os


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    # .order_by('-published_date')
    serializer_class = ArticleSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    ]
    lookup_field = "slug"

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)

        if response.status_code == 201:
            self.revalidate_cache()

        return response

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)

        if response.status_code == 200:
            self.revalidate_cache()

        return response

    def destroy(self, request, *args, **kwargs):
        response = super().destroy(request, *args, **kwargs)

        if response.status_code == 204:
            self.revalidate_cache()

        return response

    def partial_update(self, request, *args, **kwargs):
        response = super().partial_update(request, *args, **kwargs)
        print("HEREEEE", response.status_code)
        if response.status_code == 200:
            self.revalidate_cache()

        return response

    def revalidate_cache(self):
        url = os.environ.get("DJANGO_LAIMPOSTCOM_CACHE_REVALIDATE_URL")
        requests.get(url, params={"t": "articles"})
        requests.get(url, params={"t": self.get_object().slug})


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        IsOwnerOrReadOnly,
    ]
