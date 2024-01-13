from django.db import connection
from .query import Queries

def exception_handler(func):
    def wrapper(*args, **kwargs):
        try:
            result = func(*args, **kwargs)
            return result
        except Exception as e:
            print(e)
    return wrapper

query_map ={
    "get_all_books": Queries.GET_ALL_BOOKS.value
}

class DBExecutioner:

    @staticmethod
    @exception_handler
    def execute_query(query):
        # import pdb;pdb.set_trace()
        with connection.cursor() as cursor:        
            out = cursor.execute(query_map[query])
        return out


