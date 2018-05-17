from django.db import models


class Country(models.Model):
    name = models. CharField(blank=False, verbose_name='Название страны', unique=True, max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Страна'
        verbose_name_plural = 'Страны'


class City(models.Model):
    name = models.CharField(blank=False, verbose_name='Название города', max_length=255)
    country = models.ForeignKey(Country, blank=False, verbose_name='Страна', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Город'
        verbose_name_plural = 'Города'
