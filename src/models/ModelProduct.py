from .entities.Products import Products
class ModelProduct():
    @classmethod
    def new_product(self,product, mysql):
        try:
            cursor=mysql.cursor()
            sql=f"INSERT INTO productos (id_product, product_name, details,price,stock,discount)  VALUES ('{(product.id)}','{product.name}','{product.details  }','{product.price}','{product.stock}','{product.discount}')"
            print('\n',sql,'\n')
            cursor.execute(sql)
            if mysql.commit()==None:
                return {"message":f"{product.name}, su cuenta se ha creado con éxito!","class":"success"}
            
        except Exception as ex:
            #raise Exception (ex)
            print(ex)
            return {"message":"Se ha producido un error, Intente mas tarde!","class":"danger"}

        @classmethod
        def load_products(self):
            try:
                cursor=mysql.cursor()
                sql=f"INSERT INTO productos (id_product, product_name, details,price,stock,discount)  VALUES ('{(product.id)}','{product.name}','{product.details  }','{product.price}','{product.stock}','{product.discount}')"
                print('\n',sql,'\n')
                cursor.execute(sql)
                if mysql.commit()==None:
                    return {"message":f"{product.name}, su cuenta se ha creado con éxito!","class":"success"}
                
            except Exception as ex:
                #raise Exception (ex)
                print(ex)
                return {"message":"Se ha producido un error, Intente mas tarde!","class":"danger"}