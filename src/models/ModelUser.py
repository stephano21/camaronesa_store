from .entities.User import User

class ModelUser():
    @classmethod
    def login(self, mysql, user, rol):
        try:
            cursor=mysql.cursor()
            sql=f"SELECT ruc, name, password, rol FROM usuarios WHERE ruc='{user.id}'"
            print(sql)
            cursor.execute(sql)
            row= cursor.fetchone()
            if row!= None:
                if User.check_rol(row[3],rol):
                    user=User(row[0], row[1],User.check_password(row[2],user.password),User.check_rol(row[3],rol))
                    return user
                return False
            else:
                return None
        except Exception as ex:
            #raise Exception (ex)
            print(ex)

    @classmethod
    def get_by_id(self, mysql, id):
        try:
            cursor=mysql.cursor()
            sql=f"SELECT ruc, name FROM usuarios WHERE ruc={id}"
            cursor.execute(sql)
            row= cursor.fetchone()
            if row!= None:
                return User(row[0], row[1],None,None)
            else:
                return None
        except Exception as ex:
            #raise Exception (ex)
            print(ex)
    @classmethod
    #aun no se usa
    def create_user(self, mysql, user):
        try:
            cursor=mysql.cursor()
            sql=f"INSERT INTO usuarios (ruc, name, address, email, password, rol)  VALUES ('{(user.id)}','{user.name}','{user.address}','{user.email}','{user.password}','{user.rol}')"
            print('\n',sql,'\n')
            cursor.execute(sql)
            if mysql.commit()==None:
                return {"message":f"{user.name}, su cuenta se ha creado con éxito!","class":"success"}
            
        except Exception as ex:
            #raise Exception (ex)
            print(ex)
            return {"message":"Se ha producido un error, Intente mas tarde!","class":"danger"}