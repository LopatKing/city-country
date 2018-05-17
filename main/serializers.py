from main.models import City, Country
from rest_framework import serializers


class CountrySerializer(serializers.ModelSerializer):


    class Meta:
        model = Country
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    country = CountrySerializer()


    class Meta:
        model = City
        fields = '__all__'
