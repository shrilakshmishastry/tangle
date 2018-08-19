from flask_login import UserMixin
from app import db
from app import login_manager
class User(UserMixin,db.Model):

    __tablename__='user_access'

    id = db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(50))
    email=db.Column(db.String(50))
    password=db.Column(db.String(50))
@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))
