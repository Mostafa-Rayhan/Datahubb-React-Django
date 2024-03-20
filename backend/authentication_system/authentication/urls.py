from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import UserRegistrationAPIView, BlogListCreateAPIView, BlogDetailAPIView

urlpatterns = [
    path('register/', UserRegistrationAPIView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh_token/', TokenRefreshView.as_view(), name='token_refresh'),

    path('blogs/', BlogListCreateAPIView.as_view(), name='blog_list_create'),  # List and create blogs
    path('blogs/<int:pk>/', BlogDetailAPIView.as_view(), name='blog_detail'),  # Retrieve, update, or delete a blog
]