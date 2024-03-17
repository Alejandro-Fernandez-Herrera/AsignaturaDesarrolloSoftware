

from rest_framework.response import Response
from django.http import JsonResponse


from rest_framework import status
from jose import jwt
from django.http import JsonResponse
from .helpers import get_public_key  # Assuming get_public_key is placed in a utils module



def verify_permission(token, required_permission):
    
    try:
        payload = jwt.get_unverified_claims(token=token)
        print(payload)
        
        permissions = payload.get('permissions', [])
        
        
        return required_permission in permissions
    except jwt.JWTError:
        return False


def verifyPermission(self,request,permission,token):
    
    if not bool(token):
        return JsonResponse({'detail': 'Unauthenticated'}, status=status.HTTP_401_UNAUTHORIZED)
    if not bool(verify_permission(token,permission)):
        return JsonResponse({'detail': 'Unauthorized'}, status=status.HTTP_403_FORBIDDEN)
    response = self.get_response(request)    
    return response
    
    
class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    def __call__(self, request):
        # Code to be executed for each request before
        # the view (and later middleware) are called.
        if request.path.startswith('/api/accounts/'):
            token = request.headers.get('Authorization', '').split(' ')[1] if 'Authorization' in request.headers else None

            if request.method == 'POST':
                response = verifyPermission(self, request, 'create:account', token)
                if response:
                    return response
            elif request.method == 'GET':
                response = verifyPermission(self, request, 'read:account', token)
                if response:
                    return response
                
        
        return self.get_response(request)

        
                    
               
    
                
            
      


