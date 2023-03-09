from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path("", views.GetRoutesView.as_view(), name="routes"),
    path("token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("register/", views.RegisterView.as_view(), name="register"),
    path("client_id_secret/<int:pk>", views.ProfileView.as_view(), name="client_id_secret"),
    path("auth_url/<str:client_id>", views.AuthURL.as_view(), name="auth_url"),
]
