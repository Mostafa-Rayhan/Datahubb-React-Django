
from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.conf import settings

class CustomUser(AbstractUser):
    company_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    groups = models.ManyToManyField(Group, through='UserGroup', related_name='custom_users')
    user_permissions = models.ManyToManyField(Permission, through='UserPermission', related_name='custom_users_permissions')

class UserGroup(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)

class UserPermission(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    permission = models.ForeignKey(Permission, on_delete=models.CASCADE)
class Blog(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected')
    )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    def __str__(self):
        return self.title