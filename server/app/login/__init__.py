from flask import Blueprint,render_template

login=Blueprint('login',__name__,static_folder='/home/shri/tangle/client/dist',static_url_path='/home/shri/tangle/client/dist',template_folder='./../../client')
from . import views
