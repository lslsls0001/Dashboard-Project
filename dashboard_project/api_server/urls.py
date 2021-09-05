from django.urls import path
from .views import UserAPIView, CellAPIView, UnitAPIView, WaferAPIView

urlpatterns = [
    path('user', UserAPIView.as_view()),
    path('cell', CellAPIView.as_view()),
    path('unit', UnitAPIView.as_view()),
    path('wafer', WaferAPIView.as_view()),
]