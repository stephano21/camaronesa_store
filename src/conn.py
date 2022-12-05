import mysql.connector
def get_conection():
    try:
        connection=mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            db='camaronesa_store')
        if connection.is_connected():
            print("Conexión exitosa")
        return connection
    except Exception as ex:
        print(ex)