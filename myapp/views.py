from django.shortcuts import render
#from __future__ import unicode_literals
from django.http import HttpResponse

# Create your views here.

def test(request):
    return HttpResponse("HELLO")

def index(request):
    context ={
        'var1' : 'hello'
        }
    return render(request,'home.html',context)
