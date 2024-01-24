from typing import Any
from django.shortcuts import render
# from rest_framework
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, status
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from .db import DBExecutioner

# Create your views here.

# @api_view(['POST'])
# def create_author(request):
#     if request.method == 'POST':


class PersonListCreateView(generics.ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class PersonRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

class BookListCreateView(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class AuthorListCreateView(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


@csrf_exempt
@api_view(['POST'])
def create_person(request):
    if request.method == "POST":
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            new_person = Person(**serializer.validated_data)
            new_person.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response({"error":"Invalid request method"}, status=status.HTTP_400_BAD_REQUEST)