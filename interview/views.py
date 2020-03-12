from django.shortcuts import render
from .models import Interview
from .serializers import InterviewSerializer
from rest_framework import generics

# Create your views here.
class InterviewListView(generics.ListCreateAPIView):
  queryset = Interview.objects.all()
  serializer_class = InterviewSerializer

class InterviewUpdateView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Interview.objects.all()
  serializer_class = InterviewSerializer

