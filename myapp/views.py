from django.shortcuts import render
#from __future__ import unicode_literals
from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request,'home.html')

def howto(request):
    return render(request,'howto.html')

def contact(request):
    return render(request,'contact.html')

def buy(request):
    return render(request,'buy.html')




