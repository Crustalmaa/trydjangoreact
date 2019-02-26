from django.db import models
from django.contrib.auth.models import AbstractUser
from django.urls import reverse_lazy


class Company(models.Model):
    name = models.CharField(max_length=50, verbose_name='Брокерийн нэр')

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse_lazy("administrator:list-company")


class User(AbstractUser):
    regno = models.CharField(max_length=10, verbose_name='Регистерийн дугаар')
    phone = models.CharField(verbose_name='Утасны дугаар', max_length=8)
    company = models.ForeignKey(Company, related_name='workers', verbose_name='Брокер', on_delete=models.PROTECT,
                                null=True, blank=True)

    class Meta:
        permissions = (("READ_BROKER_REPORT", "Read Broker Report"),)

    def get_full_name(self):
        return "%s %s" % (self.last_name.capitalize(), self.first_name.capitalize())

    def get_short_name(self):
        if self.last_name:
            return "%s. %s" % (self.last_name[0].upper(), self.first_name.capitalize())

        return self.first_name.upper()
