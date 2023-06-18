from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import Trabajador, Profesion, Membresia

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8)

    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password')

    def validate_password(self, value):
        return make_password(value)

class ProfesionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trabajador
        fields = '__all__'
        
class ProfesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesion
        fields = '__all__'

# class MemebresiaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Membresia
#         fields = '__all__'