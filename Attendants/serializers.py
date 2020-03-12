from rest_framework import serializers
from .models import Attendant

class AttendantSerializer(serializers.ModelSerializer):
  class Meta:
    model = Attendant
    fields = '__all__'
