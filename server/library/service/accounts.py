from abc import ABC
from datetime import datetime
from ..models import *
from ..status import AccountStatus

class Account(ABC):
    def __init__(self, id, password, person, status=AccountStatus.Active):
        self.__id = id
        self.__password = password
        self.__status = status
        self.__person = person

    def reset_password(self):
        pass

class Librarian(Account):
    def __init__(self, id, password, person, status=AccountStatus.Active):
        super().__init__(id, password, person, status)
    
    def add_book_item(self, book_item):
        None
    
    def block_member(self, member):
        pass

    def un_block_member(self, member):
        pass

class Member(Account):
    def __init__(self, id, password, person, status=AccountStatus.Active):
        super().__init__(id, password, person, status)
        self.__date_of_membership = datetime.date.today()
        self.__total_books_checkedout = 0

    def get_total_books_checkedout(self):
        return self.__total_books_checkedout
    
    def reserve_book_item(self, book_item):
        None

    def increment_total_books_checkedout(self):
        None
    
    def renew_book_item(self, book_item):
        None

    def checkout_book_item(self, book_item):
        pass

    def check_for_fine(self):
        pass

    def return_book_item(self):
        pass

    def renee_book_item():
        pass
