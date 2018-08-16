from flask import Flask,render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


app=Flask(__name__,static_folder='/home/shri/tangle/client/dist',static_url_path='/home/shri/tangle/client/dist',template_folder='../../client')
app.config['STATIC_FOLDER']='/home/shri/tangle/client/images'
app.config.from_pyfile('/home/shri/tangle/config.py')
app.config['SQLALCHEMY_DATABASE_URI']='mysql://user:backspace2;@localhost/tangle'
db=SQLAlchemy(app)
db.init_app(app)
db.create_all()
migrate = Migrate(app, db)
from app import models
from .models import User
new=User(name='shrihari',email='shrilakshmishastry@gmail.com',password='123',access_token='23345',access_token_secret='dqwdwdsd')
db.session.add(new)
db.session.commit()
print(new.name)

#route to '/'
@app.route('/')
def data():
    return render_template('home.html')
@app.route('/login')
def login():
    return render_template('home.html')
