import os
print(os.getcwd())
os.makedirs('img/products/', exist_ok=True)
print(os.path.exists('src/img'))