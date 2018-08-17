from flask_login import UserMixin
from app import db

class User(db.Model):

    __tablename__='user_access'

    id = db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(50))
    email=db.Column(db.String(50))
    password=db.Column(db.String(50))
    
