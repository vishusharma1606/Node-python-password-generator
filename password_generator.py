import sys
import string
import random

def generate_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for _ in range(int(length)))

if __name__ == "__main__":
    length = sys.argv[1] if len(sys.argv) > 1 else 12
    print(generate_password(length))
