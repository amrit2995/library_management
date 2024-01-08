from django.urls import path
from .api import *

urlpatterns = [
    # path("person/", PersonListCreateView.as_view(), name="person_list_create"),
    path("person/", create_person, name='create_person'),
    path("person/<int:pk>", PersonRetrieveUpdateDestroyAPIView.as_view(), name="person_retrive_update_delete")
]