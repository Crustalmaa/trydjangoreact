from django.urls import path

from . import views

app_name = 'insurance'

urlpatterns = [
    path('vehicle/', views.VehicleInsuranceCreate.as_view(), name='vehicle-create'),
]
