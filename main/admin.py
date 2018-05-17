from django.contrib import admin
from main.models import City, Country


class CityAdmin(admin.ModelAdmin):
    list_display = ['name', 'country']

    class Meta:
        model = City


class CountryAdmin(admin.ModelAdmin):
    list_display = ['name']

    class Meta:
        model = Country


admin.site.register(City, CityAdmin)
admin.site.register(Country, CountryAdmin)