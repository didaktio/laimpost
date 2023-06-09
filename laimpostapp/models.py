from django.db import models
import uuid
import time

def gen_id():
    timestamp = int(time.time() * 1000)
    random = uuid.uuid4().hex
    unique_id = str(timestamp) + random
    return unique_id[:10]

class Article(models.Model):
    id = models.CharField(max_length=10, primary_key=True, default=gen_id, editable=False)
    title = models.CharField(max_length=200)
    body = models.TextField()
    image_src = models.CharField(max_length=200)
    image_alt = models.CharField(max_length=200)
    author_name = models.CharField(max_length=200)
    author_image_src = models.CharField(max_length=200)
    published_date = models.DateTimeField(auto_now_add=True)
    original_article = models.JSONField(null=True, blank=False)

    def __str__(self):
        return str(self.title)

class Comment(models.Model):
    id = models.UUIDField(max_length=10, primary_key=True, default=gen_id, editable=False)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    comment = models.TextField()
    author_name = models.CharField(max_length=200)
    author_image_src = models.CharField(max_length=200)
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.comment)

