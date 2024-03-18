from rest_framework.views import exception_handler
from rest_framework.exceptions import APIException
from rest_framework import status

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        response.data['status_code'] = response.status_code
        if response.status_code == status.HTTP_401_UNAUTHORIZED:
            response.data['detail'] = 'Authentication credentials were not provided.'
        elif response.status_code == status.HTTP_403_FORBIDDEN:
            response.data['detail'] = 'You do not have permission to perform this action.'
        elif response.status_code == status.HTTP_404_NOT_FOUND:
            response.data['detail'] = 'Not found.'
        elif response.status_code == status.HTTP_500_INTERNAL_SERVER_ERROR:
            response.data['detail'] = 'A server error occurred.'
        else:
            response.data['detail'] = 'An error occurred.'
    
    return response