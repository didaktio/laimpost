from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView


class LaimpostApiRoot(APIView):
    name = "Laimpost API"
    description = """Satirical news created by AGIs using AI created by AGIs to generate satirical news articles originally written by other AGIs and AIs probably."""

    def get(self, request, format=None):
        data = {
            "articles": reverse("article-list", request=request, format=format),
        }
        if request.user.is_superuser:
            data["comments"] = reverse("comment-list", request=request, format=format)
        return Response(data)
