from random import sample
from werkzeug.utils import secure_filename
import os
class Products():
    def __init__(self, id='', name='',details='',price='', stock='',discount='',img='') -> None:
        self.id = id
        self.name = name
        self.price = price
        self.stock = stock
        self.discount = discount
        self.details = details
        self.img = img

    @classmethod
    def save_images(self,file):
        basepath  = os.path.dirname(__file__)
        filename =  secure_filename(file.filename)
        extension = os.path.splitext(file.filename)[1]
        newNameFile = generate_name()+extension
        uploadPath = os.path.join(basepath,'../../static/img/products',newNameFile)
        file.save(uploadPath)
        return newNameFile
    @classmethod
    def deleter_img(self,img):
        basepath  = os.path.dirname(__file__)
        uploadPath = os.path.join(basepath,'../../static/img/products',img)
        os.remove(uploadPath)

        
#fuction out class
def generate_name():
    random_string ="0123456789abcdefghijklnopqrstuvwxyz_"
    size = 10
    secuence = random_string.upper()
    result = sample(secuence,size)
    random_string ="".join(result,)
    return random_string

  

