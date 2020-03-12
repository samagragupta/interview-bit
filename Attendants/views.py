from django.shortcuts import render
from .models import Attendant
from .serializers import AttendantSerializer
from rest_framework import generics

# Create your views here.
class AttendantView(generics.ListCreateAPIView):
  queryset = Attendant.objects.all()
  serializer_class = AttendantSerializer
