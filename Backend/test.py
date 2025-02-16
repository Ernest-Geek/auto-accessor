import os
secret_key = os.urandom(24)  # Generates a 24-byte random secret key
print(secret_key)  # Print the secret key (for use in your app)
