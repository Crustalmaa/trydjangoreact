from django.shortcuts import render
from django.urls import reverse
from django.views import generic
from django.contrib.auth.models import Permission

from bootstrap_modal_forms.mixins import PassRequestMixin

from administrator.forms import UserCreateForm, CompanyCreateForm, User, Company


def home_view(request):
    return render(request, 'administrator/home.html')


class UserCreateView(generic.CreateView):
    form_class = UserCreateForm
    template_name = 'administrator/user/create_user.html'

    def get_success_url(self):
        return reverse('administrator:detail-user', args=[self.object.id])

    def form_valid(self, form):
        is_moderator = self.request.POST.get('moderator', False)

        if is_moderator == 'on':
            user = form.instance
            user.save()
            permission = Permission.objects.get(name='Read Broker Report')
            user.user_permissions.add(permission)

        return super(UserCreateView, self).form_valid(form)


class UserListView(generic.ListView):
    model = User
    template_name = 'administrator/user/list_user.html'


class UserDetailView(generic.DetailView):
    model = User
    template_name = 'administrator/user/detail_user.html'


""" Company Views """


class CompanyCreateView(PassRequestMixin, generic.CreateView):
    form_class = CompanyCreateForm
    template_name = 'administrator/company/create_company.html'


class CompanyListView(generic.ListView):
    model = Company
    template_name = 'administrator/company/list_company.html'
