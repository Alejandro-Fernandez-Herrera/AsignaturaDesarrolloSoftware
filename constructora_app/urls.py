from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from constructora_app import views
router =routers.DefaultRouter()

urlpatterns=[
      path('accounts/me/',views.UserAccountController,name="account" ),
     path('accounts/<str:pk>/',views.AccountController,name="account" ),
    path('accounts/',views.AccountsController,name="accounts" ),
    path('docs/', include_docs_urls(title='Constructora API'))

]
