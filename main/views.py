from django.shortcuts import render
from django.http import HttpResponseRedirect


def main(request):
    return render(request, 'main/html/main.html')


def check(request):
    name = request.POST['name']
    print(name)
    return HttpResponseRedirect('/')
