from django.db import models

# Create your models here.

class Account(models.Model):
    ENUM_DOCTYPE = [
        ('CC', 'Cédula de Ciudadanía'),
        ('TI', 'Tarjeta de Identidad'),
        ('CE', 'Cédula de Extranjería'),
        ('PS', 'Pasaporte'),
    ]
    ENUM_GENDER = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]
    ENUM_ROLES=[
        ('GERENTE','Gerente'),
        ('DIRECTOR','Direcetor De Obra'),
        ('CAPATAZ','Capataz De Obra'),
        ('PEON','Peón'),
        ('AYUDANTE','Ayudante De Obra'),
    ]

    ENUM_ACCOUNT_STATUS=[
        ('ACTIVE','Activo'),
        ('INACTIVE','Inactivo'),
        
    ]
    uuid= models.CharField(max_length=50, null=False,primary_key=True)
    firstName = models.CharField(max_length=100,null=True)
    lastName = models.CharField(max_length=100,null=True)
    image = models.CharField(max_length=100,null=True)
    docType = models.CharField(max_length=50, choices=ENUM_DOCTYPE,null=True)
    docNumber = models.CharField(max_length=20, unique=True,null=True)
    email = models.CharField(max_length=100,null=False)
    gender = models.CharField(max_length=1, choices=ENUM_GENDER,null=True)
    address = models.CharField(max_length=200, null=True)
    nickName = models.CharField(max_length=50, null=True )
    role = models.CharField(max_length=50, choices=ENUM_ROLES,null=True)
    status= models.CharField(max_length=50, choices=ENUM_ACCOUNT_STATUS,null=True)
    sid = models.CharField(max_length=50,null=False)
    password = models.CharField(max_length=50,null=False)

    def __str__(self):
        return f"{self.firstName} {self.lastName}"
