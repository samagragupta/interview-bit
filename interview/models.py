from django.db import models
from Attendants.models import Attendant

# Create your models here.
class Interview(models.Model):
  start_time = models.DateTimeField()
  end_time = models.DateTimeField()
  attendants = models.ManyToManyField(Attendant)
  title = models.CharField(max_length=64)

  def __str__(self):
    return self.title
