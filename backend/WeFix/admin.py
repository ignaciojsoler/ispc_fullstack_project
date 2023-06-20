from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model
from .models import Cliente, Trabajador, Profesion, TipoUsuario, CustomUser

@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass

class ClienteAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'apellido', 'email', 'tipo_usuario']

class TrabajadorAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'apellido', 'email', 'tipo_usuario', 'profesion']

class ProfesionAdmin(admin.ModelAdmin):
    list_display = ['nombre']

class TipoUsuarioAdmin(admin.ModelAdmin):
    list_display = ['tipo']

admin.site.register(Cliente)
admin.site.register(Trabajador)
admin.site.register(Profesion)
admin.site.register(TipoUsuario)