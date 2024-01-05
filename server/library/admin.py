from django.contrib import admin
from .models import Person, Account, Book, BookItem, Author, Rack
# Register your models here.

admin.site.register(Person)
admin.site.register(Account)
admin.site.register(Book)
admin.site.register(BookItem)
admin.site.register(Author)
admin.site.register(Rack)