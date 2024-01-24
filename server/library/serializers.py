from rest_framework import serializers
from .models import Person, Account, Book, BookItem, Author, Rack, Reservation

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class BookItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookItem
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):
    person = PersonSerializer(many=False)

    class Meta:
        model = Author
        fields = '__all__'

    def create(self, validated_data):
        person_data = validated_data.pop('person')
        person_instance,created = Person.objects.get_or_create(**person_data)
        # person_instance = Person.objects.create(**person_data)
        author_instance, created = Author.objects.create(person=person_instance, **validated_data)
        return author_instance

class BookSerializer(serializers.ModelSerializer):
    authors = AuthorSerializer(many=True)

    class Meta:
        model = Book
        fields = '__all__'

    def create(self, validated_data):
        authors_data = validated_data.pop('authors')
        
        # Use get_or_create for Book with defaults to avoid race conditions
        book_instance, created = Book.objects.get_or_create(
            defaults=validated_data,
            **validated_data
        )
        for author_data in authors_data:
            person_data = author_data.pop('person')
            person_instance, created = Person.objects.get_or_create(**person_data)
            author_instance = Author.objects.create(person=person_instance, **author_data)
            book_instance.authors.add(author_instance)

        return book_instance

class RackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rack
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
