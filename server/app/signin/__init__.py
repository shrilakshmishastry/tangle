from flask import Blueprint

signin=Blueprint('signin',__name__,static_folder='/home/shri/tangle/client/dist',static_url_path='/home/shri/tangle/client/dist',template_folder='./../../client')
from .import views
