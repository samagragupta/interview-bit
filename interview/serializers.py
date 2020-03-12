from rest_framework import serializers
from .models import Interview
from Attendants.models import Attendant
from django.db.models import Q

class InterviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Interview
    fields = '__all__'

  def validate(self, data):
    if (len(data['title']) == 0):
      raise serializers.ValidationError('No title is provided.')

    if len(data['attendants'] < 2):
      raise serializers.ValidationError('2 or more attendants needed')

    for attendant in data['attendants']:
      interviews = attendant.interview_set.all()

      # Check for all users, if their other interviews are colliding with time of this interview.
      for userInterview in interviews:
        ist = userInterview.start_time
        iet = userInterview.end_time
        nst = data['start_time']
        net = data['end_time']
        if not((nst < ist and net < ist) or (nst > iet and net > iet)):
          raise serializers.ValidationError('There is a conflict in timing for interviews.')

    return data
