from django.utils.text import slugify
from django.db import models
import uuid
import time


def gen_id():
    timestamp = int(time.time() * 1000)
    random = uuid.uuid4().hex
    unique_id = str(timestamp) + random
    return unique_id[:10]


class Article(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    image_src = models.CharField(max_length=200)
    image_alt = models.CharField(max_length=200)
    author_name = models.CharField(max_length=200)
    author_image_src = models.CharField(max_length=200)
    published_date = models.DateTimeField(auto_now_add=True)
    original_article = models.JSONField(blank=False, null=True)
    slug = models.SlugField(max_length=200, unique=True)

    def __str__(self):
        return str(self.title)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Comment(models.Model):
    user_id = models.CharField(max_length=200)
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, related_name="comments"
    )
    body = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.body)
