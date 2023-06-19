from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout, get_user_model

from rest_framework import status, generics, permissions, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated

from .serializers import UserSerializer, ProfesionalSerializer, ProfesionSerializer
from .models import Trabajador, CustomUser, Profesion

# Login:
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

# Logout:
class LogoutView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        # Borramos de la request la información de sesión
        logout(request)
        # Devolvemos la respuesta al cliente
        return Response(
            status=status.HTTP_200_OK)

# Registro:
class SignupView(generics.CreateAPIView):
    model = get_user_model()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer

#CRUD:

class VerProfesionales(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Trabajador.objects.all()
    serializer_class = ProfesionalSerializer

class VerProfesiones(viewsets.ReadOnlyModelViewSet):
    permission_classes = [AllowAny] 
    queryset = Profesion.objects.all()
    serializer_class = ProfesionSerializer

class AgregarProfesional(APIView):
    permission_classes = [IsAdminUser]
    def post(self, request, format=None):
        serializer = ProfesionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,
                status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListarUsuarios(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    http_method_names = ['get']
    permission_classes = [IsAdminUser]
    def list(self, request):
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        if self.request.user.is_authenticated:
            return Response(serializer.data)

# Ver y modificar el perfil (User):
class VerPerfil(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    http_method_names = ['get', 'patch']
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user

