from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Profile, Tweet


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username',)


class ProfileSerializer(serializers.ModelSerializer):
    email = serializers.ReadOnlyField(source='user.email')
    username = serializers.ReadOnlyField(source='user.username')
    avatar_url = serializers.ReadOnlyField()

    class Meta:
        model = Profile
        fields = ('id', 'fullname', 'avatar_url', 'email', 'username',)


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ('id', 'content', 'created_at',)
