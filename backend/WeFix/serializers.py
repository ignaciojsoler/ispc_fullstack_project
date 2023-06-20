from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import Trabajador, Profesion

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
        extra_kwargs = {
            'nombre': {'required': True},
            'apellido': {'required': True},
            'email': {'required': True},
            'password': {'required': True},
            'tipo_usuario': 1,
            'profesion': {'required': True},
            'descripcion': {'required': True},
            'telefono': {'required': True},
            'direccion': {'required': True},
            'ciudad': {'required': True},
            'provincia': {'required': True},
            'matricula': {'required': True},
            'rating': {'required': True},
            'precio_hora': {'required': True},
            'estado_membresia': False,
        }
        
class ProfesionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesion
        fields = '__all__'

# class MemebresiaSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Membresia
#         fields = '__all__'