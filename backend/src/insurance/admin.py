from django.contrib import admin
from .models import *

admin.site.register(Insurer)
admin.site.register(Owner)
admin.site.register(Vehicle)
admin.site.register(VehicleInsurance)
