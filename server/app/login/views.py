from flask import render_template,request
from . import login

# route to login
print('heelo world')

@login.route('/login',methods=['GET','POST'])
def login_data():
    if request.method == 'POST':
        print(request.is_json)
        data=request.get_json()
        return ('hello world')
    return render_template('home.html')
