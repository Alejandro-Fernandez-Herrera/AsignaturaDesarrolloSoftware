"""
ASGI config for constructora constructora.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoconstructora.com/en/5.0/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'constructora.settings')

application = get_asgi_application()
