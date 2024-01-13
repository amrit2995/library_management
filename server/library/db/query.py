from enum import Enum, auto

GET_ALL_BOOKS = '''
    SELECT * FROM BOOKS
'''

class Queries(Enum):
    GET_ALL_BOOKS = GET_ALL_BOOKS
    
