from django.contrib import admin
from accounts.models import User, Company

from django.contrib.auth.admin import UserAdmin


class AuthAdmin(UserAdmin):
    pass


admin.site.register(User, UserAdmin)
admin.site.register(Company)
