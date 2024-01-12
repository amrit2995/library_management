from django.db import models
from .status import AccountStatus, Genres
from .models import *

# import pdb;pdb.set_trace()

class Person(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)  # You may want to adjust the max_length based on your needs

    def __str__(self):
        return self.name

class Account(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    password = models.CharField(max_length=255)
    status = models.IntegerField(choices=[(status.value, status.name) for status in AccountStatus], default=AccountStatus.ACTIVE.value)
    person = models.ForeignKey(Person, on_delete=models.CASCADE, related_name='accounts')

    def __str__(self):
        return self.id

class Book(models.Model):
    ISBN = models.CharField(max_length=13, primary_key=True)
    title = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    genre = models.CharField(max_length=50, choices=[ (genre.value, genre.name) for genre in Genres], default=Genres.BIOGRAPHY.value)
    publisher = models.CharField(max_length=255)
    language = models.CharField(max_length=50)
    number_of_pages = models.PositiveIntegerField()
    authors = models.ManyToManyField('Author', related_name="books")

class BookItem(models.Model):
    barcode = models.CharField(max_length=255, primary_key=True)
    borrowed = models.BooleanField(default=False)
    due_date = models.DateField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    book_format = models.CharField(max_length=50)
    status = models.CharField(max_length=50)
    date_of_purchase = models.DateField()
    publication_date = models.DateField()
    rack = models.ForeignKey('Rack', on_delete=models.CASCADE, related_name="book_items")
    book = models.ForeignKey('Book', on_delete=models.CASCADE, related_name="book_items")

class Author(models.Model):
    person = models.OneToOneField(Person, on_delete=models.CASCADE)
    book = models.ManyToManyField(Book)


class Rack(models.Model):
    number = models.CharField(max_length=255, primary_key=True)
    location_identifier = models.CharField(max_length=255)

    def __str__(self):
        return f"Rack {self.number} - {self.location_identifier}"

class Reservation(models.Model):
    book = models.ForeignKey(BookItem, on_delete=models.CASCADE, related_name="reservations")
    account = models.ForeignKey(Account, on_delete=models.CASCADE, related_name="reservations")
    requested_date = models.DateField()


    def __str__(self):
        return f"{self.id}"

