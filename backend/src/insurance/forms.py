from django import forms

from .models import VehicleInsurance, Vehicle, Insurer, Owner


class VehicleInsuranceCreateForm(forms.ModelForm):
    class Meta:
        model = VehicleInsurance
        fields = ('amount', 'contract_term', 'start_date')


class VehicleForm(forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = "__all__"


class InsurerForm(forms.ModelForm):
    class Meta:
        model = Insurer
        fields = "__all__"


class OwnerForm(forms.ModelForm):
    class Meta:
        model = Owner
        fields = "__all__"
