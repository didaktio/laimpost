from django.urls import path, include
from rest_framework import routers
from laimpostapp.views import ArticleViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register('articles', ArticleViewSet)
router.register('comments', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

