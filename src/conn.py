import mysql.connector
from decouple import config
def get_conection():
    try:
        connection=mysql.connector.connect(
            host=config("MYSQL_HOST"),
            user=config("MYSQL_USER"),
            password=config("MYSQL_PASSWORD"),
            db=config("MYSQL_DB"),
            port=config("MYSQL_PORT"))
            
        if connection.is_connected():
            print("Conexión exitosa")
        return connection
    except Exception as ex:
        print(ex)