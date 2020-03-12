from django.contrib import admin
from django.urls import path

from Attendants import views as AttendantViews
from interview import views as InterviewViews

urlpatterns = [
    path('admin/', admin.site.urls),
    path('attendants', AttendantViews.AttendantView.as_view()),
    path('interviews', InterviewViews.InterviewListView.as_view()),
    path('interviews/<int:pk>', InterviewViews.InterviewUpdateView.as_view())
]
