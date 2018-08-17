from flask import render_template,request
from . import signin
from ..models import User
from app import db
# route to login
print('shrilakshmi')

@signin.route('/signin',methods=['GET','POST'])
def signin_data():
    if request.method == 'POST':
        print(request.is_json)
        data=request.get_json()
        name=data['name']
        password=data['password']
        email=data['email']
        if User.query.filter_by(name=name).first() is None:
            user=User(name=name,password=password,email=email)
            db.session.add(user)
            db.session.commit()
            return ('success')
        else:
            return ('false')    
    return render_template('home.html')
