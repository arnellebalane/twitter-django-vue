from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Profile, Tweet


class UserSerializer(serializers.BaseSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)


class ProfileSerializer(serializers.BaseSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'fullname', 'avatar_url',)


class TweetSerializer(serializers.BaseSerializer):
    class Meta:
        model = Tweet
        fields = ('id', 'content', 'created_at',)
