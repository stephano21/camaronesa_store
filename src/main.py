
import os
from decouple import config
from test import save_images,save_dataproducts
from flask import Flask, render_template, request, redirect, url_for,flash
from config import config
from conn import get_conection
from flask_wtf.csrf import CSRFProtect
from flask_login import LoginManager, login_user, logout_user, login_required
import json
#Models
from models.ModelUser import ModelUser
from models.ModelProduct import ModelProduct

#Entities:
from models.entities.User import User
from models.entities.Products import Products


app= Flask(__name__)
csrf=CSRFProtect()
mysql= get_conection()
login_manager=LoginManager(app)


#show image

IMG_FOLDER = os.path.join('static','img')
print(IMG_FOLDER)

app.config['UPLOAD_FOLDER'] = IMG_FOLDER
#routes and functions
@login_manager.user_loader
def load_user(id):
    return ModelUser.get_by_id(mysql,id)

@app.route('/')
def index():
    return redirect(url_for('login'))


@app.route('/singup', methods=['GET','POST'])
def singup():
    return render_template('auth/singup.html')


@app.route('/create_product', methods=['GET','POST'])
@login_required
def create_product():
    if request.method=='POST':
        if request.files['img']:
            product_data = Products('',request.form['name'],request.form['detail'],request.form['price'],0,0,request.files['img'])
            new_product= ModelProduct.new_product(product_data,mysql)
            print(new_product)
            flash("Archivo guardado exitosamente")
            return render_template('admin/add_product.html')
        else:
            flash('')
        return render_template('admin/add_product.html')
    else:
        return render_template('admin/add_product.html')

@app.route('/create_account', methods=['POST','GET'])
def create_account():
    if request.method=='POST':
        user_data = User(request.form['id'],request.form['name'],User.hashed_password(request.form['password']),'client',request.form['email'],request.form['address'])
        new_user=ModelUser.create_user(mysql,user_data) 
        return json.dumps(new_user)


    else:
        return render_template('xd.html')

#LOaders
@app.route('/loader_products', methods=['GET'])
def loader_products():
    if request.method=='GET':
        response=ModelProduct.load_products(mysql)
        print(response)
        return json.dumps(response)
    


@app.route('/loader_item', methods=['POST'])
def loader_item():
    if request.method=='POST':
        id= request.form['id']
        response=ModelProduct.load_unique_product(mysql,id)
        print(response)
        return json.dumps(response)

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method=='POST':
        user = User(request.form['username'],0, request.form['password'],"client",0)
        logged_user = ModelUser.login(mysql,user,"client")
        if logged_user !=  None and logged_user!= False: #allready user and match rol
            if logged_user.password:
                login_user(logged_user,"model user")
                return redirect(url_for("home"))
            else:
                flash("Contraseña o usuario incorrecto")
                return render_template("auth/login.html")
        elif logged_user==False:
            flash("No permisison")    
            return render_template('auth/login.html')
        else:
            flash("Usuario no encontrado")    
            return render_template('auth/login.html')
    else:
        return render_template('auth/login.html')
@app.route("/view_product", methods=['GET','POST'])
@login_required
def view_products():
    if request.method=='GET':
        return render_template('product_item.html')


@app.route('/porfile', methods=['GET','POST'])
@login_required
def porfile():
    if request.method=='GET':
        return render_template('porfile.html')

@app.route('/home')
@login_required
def home():
    portada = os.path.join(app.config['UPLOAD_FOLDER'], 'xd.jpg')

    return render_template('home.html',user_image=portada)


@app.route('/account')
@login_required
def account():

    return render_template('account.html')

@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for("login"))

def status_401(e):
    return redirect(url_for("login"))

def status_404(e):
    return "<h1>Page not found</h1>"
if __name__=="__main__":
    app.config.from_object(config['development'])
    csrf.init_app(app)
    app.register_error_handler(401,status_401)
    app.register_error_handler(404,status_404)
    app.run(host='0.0.0.0',port=5000)