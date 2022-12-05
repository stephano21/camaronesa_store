from werkzeug.security import check_password_hash,generate_password_hash
from flask_login import UserMixin


class User(UserMixin):
    def __init__(self, id, name, password, rol, email='', address='') -> None:
        self.id = id
        self.name = name
        self.address = address
        self.password = password
        self.rol = rol
        self.email = email

    @classmethod
    def check_password(self, hashed_pasword, password):
        return check_password_hash(hashed_pasword, password)
    @classmethod
    def hashed_password(self,password):
        return generate_password_hash(password)

    @classmethod
    def check_rol(self, rol, rol_form):
        return str(rol) == str(rol_form)
# print(generate_password_hash("1111"))
