"""
WSGI config for constructora constructora.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoconstructora.com/en/5.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'constructora.settings')

application = get_wsgi_application()
