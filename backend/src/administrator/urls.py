from django.urls import path

from administrator import views

app_name = 'administrator'

urlpatterns = [
    path('', views.home_view, name='home'),
    path('user/new/', views.UserCreateView.as_view(), name='create-user'),
    path('user/<int:pk>/', views.UserDetailView.as_view(), name='detail-user'),
    path('user/list/', views.UserListView.as_view(), name='list-user'),
    path('company/new/', views.CompanyCreateView.as_view(), name='create-company'),
    path('company/list/', views.CompanyListView.as_view(), name='list-company'),
]
