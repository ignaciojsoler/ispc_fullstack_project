from django.urls import path 
from .views import *

urlpatterns = [ # endpoints
  # Auth views
  path('auth/login/',
    LoginView.as_view(), name='auth_login'),
  path('auth/logout/',
    LogoutView.as_view(), name='auth_logout'),
  
  path('auth/signup/',
    SignupView.as_view(), name='auth_signup'),
  
  path('verProfesionales/',
    VerProfesionales.as_view(), name='verProfesionales'),
  
  # path('verProfesiones/',
  #   VerProfesiones.as_view(), name='verProfesiones'),
  
  # path('user/verPerfil/',
  #   VerPerfil.as_view(), name='user_verPerfil'),
  
  # path('auth/AgregarProfesional/',
  #   AgregarProfesional.as_view(), name='auth_agregarProfesional'),
  # path('auth/ListarUsuarios/',
  #   ListarUsuarios.as_view(), name='auth_listarUsuarios'),
    
]
