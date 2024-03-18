from rest_framework import serializers
from .models import CustomUser, Blog

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password', 'company_name', 'phone_number']

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password'],
            company_name=validated_data['company_name'],
            phone_number=validated_data['phone_number']
        )
        return user

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'user', 'title', 'content', 'status']
        read_only_fields = ['user']