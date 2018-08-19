from flask import render_template,request,session
from . import login
from ..models import User
from flask_login import LoginManager,current_user,login_user
from app import app
# route to login
print('heelo world')

@login.route('/login',methods=['GET','POST'])
def login_data():
    if request.method == 'GET':
        return render_template('home.html')
    if request.method == 'POST':
        print(request.is_json)
        data=request.get_json()
        email=data['email']
        password=data['password']
        if  email in session:
            return('exist')
        elif(User.query.filter_by(email=email).first()):
            user=User.query.filter_by(email=email).first()
            print('hello world')
            session['email']=email
            login_user(user,remember=True)
            print('shrihari')
            return('logged in ')
        else:
            return('sigin')
    return render_template('home.html')
