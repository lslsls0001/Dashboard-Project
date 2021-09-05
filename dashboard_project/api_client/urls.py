from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('administrator', index),
    path('designer', index),
    path('designer/chart', index),
    path('designer/personal', index),
    path('designer/setting/record', index),
    path('viewer', index),
    path('login', index),
]
