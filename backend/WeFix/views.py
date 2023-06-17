from django.shortcuts import render

from django.contrib.auth import authenticate, login, logout
from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework import permissions
# Create your views here.


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Recuperamos las credenciales y autenticamos el usuario
        email = request.data.get('email', None)
        password = request.data.get('password', None)
        user = authenticate(email=email, password=password)

        # Si es correcto añadimos a la request la información de sesión
        if user:
            login(request, user)
            return Response(
                data="Iniciaste sesión correctamente",
                status=status.HTTP_200_OK)
            # login(request, user)
            # return Response(
            #   data=UserSerializer(user).data,
            #   status=status.HTTP_200_OK)

        # Si no es correcto devolvemos un error en la petición
        return Response(
            status=status.HTTP_404_NOT_FOUND, data="No se puede iniciar sesión")


class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        # Borramos de la request la información de sesión
        logout(request)

        # Devolvemos la respuesta al cliente
        return Response(
            status=status.HTTP_200_OK)


class SignupView(generics.CreateAPIView):
    model = get_user_model()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer