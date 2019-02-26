from django import forms
from django.contrib.auth.forms import AuthenticationForm

from accounts.models import User


class LoginForm(AuthenticationForm):
    class Meta:
        model = User
        fields = "__all__"
