from django.db import models
from django.contrib.auth.models import User


MAX_LENGTH=150


class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    # client_id = models.CharField(max_length=MAX_LENGTH, blank=True, default="")
    # client_secret = models.CharField(max_length=MAX_LENGTH, blank=True, default="")

    refresh_token = models.CharField(max_length=MAX_LENGTH, blank=True, default="")
    access_token = models.CharField(max_length=MAX_LENGTH, blank=True, default="")
    token_type = models.CharField(max_length=MAX_LENGTH, blank=True, default="")
    expires_in = models.DateTimeField()



class Room(models.Model):
    host = models.OneToOneField(Profile, null=True, on_delete=models.CASCADE)
    max_size = models.IntegerField()
    pause = models.BooleanField()
    skip = models.BooleanField()
    volume_up = models.BooleanField()
    volume_down = models.BooleanField()
    select_next_song = models.BooleanField()
    created = models.DateField(auto_now_add=True)
    members = models.JSONField()
