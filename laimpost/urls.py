from django.urls import path, include
from rest_framework import routers
from laimpostapp.views import ArticleViewSet, CommentViewSet
from laimpostapp.api_root import LaimpostApiRoot

router = routers.DefaultRouter()
router.register("articles", ArticleViewSet)
router.register("comments", CommentViewSet)

urlpatterns = [
    path("", LaimpostApiRoot.as_view(), name="api-root"),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path(
        "articles/<slug>/",
        ArticleViewSet.as_view(
            {
                "get": "retrieve",
                "put": "update",
                "patch": "partial_update",
                "delete": "destroy",
            }
        ),
        name="article-detail",
    ),
] + router.urls
