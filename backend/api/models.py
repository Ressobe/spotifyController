from django.db import models
from django.contrib.auth.models import User


MAX_LENGTH=40


class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    client_id = models.CharField(max_length=MAX_LENGTH, blank=True, default="")
    client_secret = models.CharField(max_length=MAX_LENGTH, blank=True, default="")
    refresh_token_spotify = models.CharField(max_length=MAX_LENGTH, blank=True, default="")
    access_token_spotify = models.CharField(max_length=MAX_LENGTH, blank=True, default="")


class Room(models.Model):
    max_size = models.IntegerField(default=2)
    pause = models.BooleanField(default=False, blank=False)
    skip = models.BooleanField(default=False, blank=False)
    volume_up = models.BooleanField(default=False, blank=False)
    volume_down = models.BooleanField(default=False, blank=False)
    select_next_song = models.BooleanField(default=False, blank=False)
    members = models.JSONField()
