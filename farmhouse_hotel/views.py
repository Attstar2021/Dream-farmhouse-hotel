from django.shortcuts import render


# Create your views here.


def farmhouse_hotel(request):
    return render(request, 'farmhouse.html')
