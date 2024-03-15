from django.db import models

# Create your models here.

class Usuario(models.Model):
    TIPO_IDENTIFICACION = [
        ('CC', 'Cédula de Ciudadanía'),
        ('TI', 'Tarjeta de Identidad'),
        ('CE', 'Cédula de Extranjería'),
        ('PS', 'Pasaporte'),
    ]
    GENEROS = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]
    fotografia = models.ImageField(upload_to='fotografias/', null=True, blank=True)
    tipo_identificacion = models.CharField(max_length=2, choices=TIPO_IDENTIFICACION)
    nro_identificacion = models.CharField(max_length=20, unique=True)
    apellidos = models.CharField(max_length=100)
    nombres = models.CharField(max_length=100)
    genero = models.CharField(max_length=1, choices=GENEROS)
    direccion = models.CharField(max_length=200, null=True, blank=True)
    celular = models.CharField(max_length=20, null=True, blank=True)
    def __str__(self):
        return f"{self.nombres} {self.apellidos}"
