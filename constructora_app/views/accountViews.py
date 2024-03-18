from django.shortcuts import render
from rest_framework import viewsets
from .serializer import AccountSerializer
from .models import Account
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.views.generic import ListView

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
