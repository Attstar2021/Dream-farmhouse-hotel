from django.shortcuts import render


# Create your views here.


def farmhouse_hotel(request):
    return render(request, 'farmhouse.html')

def login_page(request):
    return render(request, 'login.html')

def register_page(request):
    return render(request, 'register.html')
