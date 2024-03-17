from django.shortcuts import render
from rest_framework import viewsets
from .serializer import AccountSerializer
from .models import Account
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
def getAccount(request, pk=''):
    accounts = Account.objects.all()
    return Response(accounts)
def updateAccount(request):
    accounts = Account.objects.all()
    return Response(accounts)
def deleteAccount(request):
    accounts = Account.objects.all()
    return Response(accounts)
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

@api_view(['POST','GET'])
def AccountsController(request):
    if request.method=='GET':
        return getAccounts(request)
    
    if request.method=='POST':
        return createAccount(request)
    
    
@api_view(['PUT','GET','DELETE'])
def AccountController(request,pk=''):
    if request.method=='GET':
        return getAccount(request,pk)
    if request.method=='PUT':
        return updateAccount(request)
    if request.method=='DELETE':
        return deleteAccount(request)
    
@api_view(['GET'])
def UserAccountController(request):
    if request.method=='GET':
        return getAccount(request,'')

    
       


