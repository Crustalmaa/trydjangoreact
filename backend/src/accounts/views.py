from django.urls import reverse_lazy
from django.views import generic
from django.contrib.auth import authenticate, login

from django.http import HttpResponseRedirect

from . import forms


class LoginView(generic.FormView):
    form_class = forms.LoginForm
    template_name = 'accounts/login.html'
    success_url = reverse_lazy('main:home')

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(self.success_url)
        return super(LoginView, self).dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        username = form.cleaned_data['username']
        password = form.cleaned_data['password']

        user = authenticate(username=username, password=password)

        if user is not None and user.is_active:
            login(request=self.request, user=user)
            return super(LoginView, self).form_valid(form)
        else:
            return super(LoginView, self).form_invalid(form)
