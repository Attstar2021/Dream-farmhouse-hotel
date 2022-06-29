from django.urls import path
from .views import *
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', farmhouse_hotel, name='farmhouse'),    
]

urlpatterns += staticfiles_urlpatterns()