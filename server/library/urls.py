from django.urls import path
from .api import *

urlpatterns = [
    path("person/", PersonListCreateView.as_view(), name="person_list_create"),
    path("author/", AuthorListCreateView.as_view(), name="author_list_create"),
    path("book/", BookListCreateView.as_view(), name="book_list_create"),
    path("person/<int:pk>", PersonRetrieveUpdateDestroyAPIView.as_view(), name="person_retrive_update_delete")
]