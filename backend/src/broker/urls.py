from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('main_app.urls')),
    path('accounts/', include('accounts.urls')),
    path('daatgal/', include('insurance.urls')),
    path('admin/', include('administrator.urls')),
    path('realAdmin/', admin.site.urls)
]
