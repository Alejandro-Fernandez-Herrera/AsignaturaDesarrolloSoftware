from django.shortcuts import render
from rest_framework import viewsets
from .serializer import AccountSerializer
from .models import Account
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
import uuid
import requests
import requests
import json
from urllib.parse import quote

def getAccounts(request):
    accounts = Account.objects.all()
    serializer = AccountSerializer(accounts, many=True)
    return Response(serializer.data)
def createAccount(request):
    serializer = AccountSerializer(data=request.data)
    if serializer.is_valid():
        # If data is valid, create a new account object
        account = serializer.save()
        # Return the created account data with a 201 CREATED status
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        # If data is invalid, return the errors with a 400 BAD REQUEST status
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
def getAccount(pk):
    account = get_object_or_404(Account, pk=pk)
    serializer = AccountSerializer(account)
    return Response(serializer.data)
def updateAccount(request,pk):
    account = get_object_or_404(Account, pk=pk)
    serializer = AccountSerializer(account, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
def deleteAccount(pk):
    account = get_object_or_404(Account, pk=pk)
    account.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
def getAuth0Token(): 
    url = "https://dev-aria802vns1qw1u8.us.auth0.com/oauth/token"
    payload = "{\"client_id\":\"DzheN55qj6bx7L7ya2RlTgIBhXrRNfnW\",\"client_secret\":\"-yk7cwjpBORsKy5i1p94sXF8pLGuO78X8ViCkSoZaggCug_9iqYBkSzY64x-o91m\",\"audience\":\"https://dev-aria802vns1qw1u8.us.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"
    headers = { 'content-type': "application/json" }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()




def createAuth0User(token,data,uuid):
    print('creating....')
    url = "https://dev-aria802vns1qw1u8.us.auth0.com/api/v2/users"
    example = {
    "email": "user@example.com",  
    "blocked": False,
    "given_name": "string",
    "family_name": "string",
    "name": "string",   
    "connection": "Username-Password-Authentication",
    "password": "string_23123*",
    "username": "test",
    }
    data['app_metadata'] = {
        'accountUuid':uuid
    }
    payload = json.dumps(data)
    headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer '+ token
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    return response.json()

def updateAuth0User(token,data,userId):
    print('updating....')
    url = "https://dev-aria802vns1qw1u8.us.auth0.com/api/v2/users/"+userId
   

    payload = json.dumps(data)
    headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer '+ token
    }

    response = requests.request("PATCH", url, headers=headers, data=payload)

    return response.json()
def addRoleToUser(token, userId,role):
    print('asigning role...')
    encoded_user_id = quote(userId)
    url = "https://dev-aria802vns1qw1u8.us.auth0.com/api/v2/users/"+encoded_user_id + '/roles'
   
    payload = json.dumps({"roles":[role]})
    headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer '+ token
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    

def createUser(request):
    accountUuid = str(uuid.uuid4())
    token = getAuth0Token()
    auth0User = createAuth0User(token['access_token'],request.data['account'],accountUuid)
    addRoleToUser(token['access_token'],auth0User['user_id'],request.data['role'])
    return Response(data=auth0User)

def updateUser(request,userId):
    token = getAuth0Token()
    auth0User = updateAuth0User(token['access_token'],request.data,userId)
    return Response(data=auth0User)

@api_view(['POST','GET'])
def AccountsController(request):
    if request.method=='GET':
        return getAccounts(request)
    
    if request.method=='POST':
        return createAccount(request)   
@api_view(['PUT','GET','DELETE'])
def AccountController(request,pk):
    if not pk:
        return Response({'error': 'Clave primaria requerida'}, status=status.HTTP_400_BAD_REQUEST)
    # Obtener la cuenta; devolver 404 si no existe
    
    if request.method == 'GET':
        return getAccount(pk)
        
    if request.method == 'PUT':
        return updateAccount(request,pk)
        
    if request.method == 'DELETE':
        return deleteAccount(pk)  
@api_view(['GET'])
def UserAccountController(request):
    if request.method=='GET':
        return getAccounts(request)

@api_view(['POST','PATCH'])
def UsersController(request,userId=''):
    if request.method=='PATCH':
        return updateUser(request,userId)
    
    if request.method=='POST':
        return  createUser(request) 
       


