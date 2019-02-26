from django import forms
from django.contrib.auth.forms import UserCreationForm

from bootstrap_modal_forms.mixins import PopRequestMixin, CreateUpdateAjaxMixin

from accounts.models import User, Company


class UserCreateForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'company', 'username', 'regno', 'phone', 'password1', 'password2')


class CompanyCreateForm(PopRequestMixin, CreateUpdateAjaxMixin, forms.ModelForm):
    name = forms.CharField(label='Байгууллагын нэр',
                           widget=forms.TextInput(attrs={'class': 'form-control form-control-light'}))

    class Meta:
        model = Company
        fields = ('name',)

    def clean_name(self):
        name = self.cleaned_data['name']

        if name == 'sda':
            raise forms.ValidationError("Болохгүй")

        return name
