from django.views import generic

from .forms import *


class VehicleInsuranceCreate(generic.CreateView):
    model = VehicleInsurance
    form_class = VehicleInsuranceCreateForm
    template_name = 'insurance/vehicle/create.html'

    def get_context_data(self, **kwargs):
        context = super(VehicleInsuranceCreate, self).get_context_data(**kwargs)

        context['vehicleForm'] = VehicleForm
        context['insurerForm'] = InsurerForm
        context['ownerForm'] = OwnerForm

        return context
