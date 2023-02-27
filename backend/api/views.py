from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer, ProfileSerializer
from django.contrib.auth.models import User
from .models import Profile
from rest_framework import generics


perimissions = (
  "user-read-private",
  "user-read-email",
  "user-modify-playback-state",
  "user-read-playback-position",
  "user-library-read",
  "streaming",
  "user-read-playback-state",
  "user-read-recently-played",
  "playlist-read-private",

)

ROUTES = ["token/", "token/refresh", "register/", "client_id_secret/"]

class GetRoutesView(APIView):
    def get(self, request):
        return Response(ROUTES)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class ProfileView(generics.CreateAPIView):
    serializer_class = ProfileSerializer