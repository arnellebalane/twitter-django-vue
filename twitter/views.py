from django.views.generic import TemplateView
from django.contrib.auth.models import User

from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Profile, Tweet
from .serializers import UserSerializer, ProfileSerializer, TweetSerializer


class FrontendView(TemplateView):
    template_name = 'twitter/index.html'


class RegisterView(APIView):

    def post(self, request):
        user_serializer = UserSerializer(data=request.data)
        profile_serializer = ProfileSerializer(data=request.data)

        if profile_serializer.is_valid() and user_serializer.is_valid():
            user = User.objects.create_user(
                user_serializer.validated_data.get('username'),
                user_serializer.validated_data.get('email'),
                request.data.get('password'))
            profile = profile_serializer.save(user=user)

            return Response(profile_serializer.data,
                            status=status.HTTP_201_CREATED)
        errors = {**profile_serializer.errors, **user_serializer.errors}
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)


class CurrentUserView(APIView):

    def get(self, request):
        serializer = ProfileSerializer(request.user.profile)
        return Response(serializer.data)


class UserTweetsView(APIView):

    def get(self, request, username):
        tweets = Tweet.objects.filter(user__username=username)
        serializer = TweetSerializer(tweets, many=True)
        return Response(serializer.data)


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class TweetViewSet(viewsets.ModelViewSet):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)
