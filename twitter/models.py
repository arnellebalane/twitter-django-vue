from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(
        User, related_name='profile', on_delete=models.CASCADE)
    fullname = models.CharField(max_length=255)
    avatar_url = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullname


class Tweet(models.Model):
    user = models.ForeignKey(
        User, related_name='tweets', on_delete=models.CASCADE)
    content = models.CharField(max_length=240)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
