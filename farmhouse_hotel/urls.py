from django.urls import path
from .views import *
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', farmhouse_hotel, name='farmhouse'),  
    path('login/', login_page, name='login_page'),
    path('register/', register_page, name='register_page'),
]

urlpatterns += staticfiles_urlpatterns()