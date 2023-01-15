from .entities.Products import Products
class ModelProduct():
    @classmethod
    def new_product(self,product, mysql):
        try:
            new_name= Products.save_images(product.img)
            cursor=mysql.cursor()
            sql=f"INSERT INTO productos (product_name, details,price,img)  VALUES ('{product.name}','{product.details  }','{product.price}','{new_name}')"
            print('\n',sql,'\n')
            cursor.execute(sql)
            if mysql.commit()==None:
                return {"message":f"{product.name}, su cuenta se ha creado con éxito!","class":"success"}
            
        except Exception as ex:
            #raise Exception (ex)
            print(ex)
            Products.deleter_img(new_name)
            return {"message":"Se ha producido un error, Intente mas tarde!","class":"danger"}

    @classmethod
    def load_products(self,mysql):
        try:
            data=[]
            cursor=mysql.cursor()
            sql=f"SELECT * FROM productos"
            cursor.execute(sql)
            row= cursor.fetchall()
            if row !=None:
                for i in row:
                    json={'id':i[0],'name':i[1],'detail':i[2],'price':i[3],'stock':i[4],'discount':i[5]}
                    data.append(json)
                return data
            
        except Exception as ex:
            #raise Exception (ex)
            print(ex)
            return {"message":"Se ha producido un error, Intente mas tarde!","class":"danger"}
    @classmethod
    def load_unique_product(self,mysql,id):
        try:
            data=[]
            cursor=mysql.cursor()
            sql=f"SELECT * FROM productos WHERE id_product='{id}'"
            print('\n',sql,'\n')
            cursor.execute(sql)
            row= cursor.fetchall()
            if row !=None:
                for i in row:
                    json={'id':i[0],'name':i[1],'detail':i[2],'price':i[3],'stock':i[4],'discount':i[5]}
                    data.append(json)
                return data
            
        except Exception as ex:
            #raise Exception (ex)
            print(ex)
            return {"message":"Se ha producido un error, Intente mas tarde!","class":"danger"}