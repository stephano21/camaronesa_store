#generate randoms filenames
from random import sample
from werkzeug.utils import secure_filename
import os
def generate_name():
    random_string ="0123456789abcdefghijklnopqrstuvwxyz_"
    size = 10
    secuence = random_string.upper()
    result = sample(secuence,size)
    random_string ="".join(result,)
    return random_string

def save_images(file):
    basepath  = os.path.dirname(__file__)
    filename =  secure_filename(file.filename)
    extension = os.path.splitext(file.filename)[1]
    newNameFile = generate_name()+extension
    uploadPath = os.path.join(basepath,'static/img/products',newNameFile)
    file.save(uploadPath)
    return newNameFile

def save_dataproducts(data,conn):
    print(data)
