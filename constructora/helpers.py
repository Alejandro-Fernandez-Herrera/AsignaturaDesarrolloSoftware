import requests
from django.core.cache import cache



def get_public_key(remote_key_url):
    # Check if the key is in cache
    public_key = cache.get('jwt_public_key')
    if not public_key:
        # Fetch the public key from the remote URL
        response = requests.get(remote_key_url)
        public_key = response.json()  # Assuming the URL directly returns the public key
        # Cache the public key for future requests
        cache.set('jwt_public_key', public_key, timeout=86400)  # Cache for 24 hours
    return public_key