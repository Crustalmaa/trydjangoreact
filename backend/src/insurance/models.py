from django.db import models
from django.utils.translation import ugettext_lazy as _

from utils import const


class Insurer(models.Model):
    last_name = models.CharField(_('Овог'), max_length=50)
    first_name = models.CharField(_('Нэр'), max_length=50)
    regno = models.CharField(_('Регистерийн дугаар'), max_length=10)
    phone = models.IntegerField(_('Утасны дугаар'))
    email = models.EmailField(_('Имэйл хаяг'))

    def __str__(self):
        return self.first_name


class Owner(models.Model):
    is_company = models.CharField(_('Байгууллага'), max_length=50, choices=const.OWNER_TYPE)
    full_name = models.CharField(_('Нэр'), max_length=100)
    regno = models.CharField(_('Регистерийн дугаар'), max_length=10)
    phone = models.IntegerField(_('Утасны дугаар'))

    def __str__(self):
        return self.full_name


class Vehicle(models.Model):
    reg_number = models.CharField(_('Улсын дугаар'), max_length=10)
    engine_number = models.CharField(_('Арлын дугаар'), max_length=30)
    manufacturer = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    variant = models.CharField(max_length=50)
    reg_year = models.DateField()
    mn_reg_year = models.DateField()


class VehicleInsurance(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.PROTECT, verbose_name='Тээврийн хэрэгсэл')
    insurer = models.ForeignKey(Insurer, on_delete=models.PROTECT, verbose_name='Даатгуулагч')
    owner = models.ForeignKey(Owner, on_delete=models.SET_NULL, verbose_name='Өмчлөгч', null=True, blank=True)
    amount = models.FloatField()
    contract_term = models.CharField(max_length=50, choices=const.CONTRACT_TERM)
    plan = models.CharField(max_length=50, choices=const.PLAN)
    start_date = models.DateField()
    end_date = models.DateField()
    created_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id) + ' Тээврийн хэрэслийн даатгал'
