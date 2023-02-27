from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import Profile


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )

        user.set_password(validated_data['password'])
        user.save()

        profile = Profile.objects.create(user=user)
        profile.save()

        return user

class ProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    client_id = serializers.CharField(write_only=True, required=True)
    client_secret = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Profile
        fields = ('id', 'client_id', 'client_secret')


    def create(self, validated_data):

        profile = Profile.objects.filter(id=validated_data["id"]).first()
        profile.client_id = validated_data["client_id"]
        profile.client_secret = validated_data["client_secret"]

        profile.save()

        return profile


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # TODO
        # Dodac sprawdzenie czy tylko jeden jest profil do danego usera
        # jesli nie to exception
        profile = Profile.objects.filter(user=user).first()

        token["user_id"] = user.id
        token["profile_id"] = profile.id
        token["client_id"] = profile.client_id
        token["client_secret"] = profile.client_secret

        return token
