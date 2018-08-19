from flask_wtf import FlaskForm
from wtforms import PasswordField,StringField
from wtforms.validators import DataRequired,Email
from app import login_manager

from ..models import User

class LoginForm(FlaskForm):

    email=StringField('email',validators=[DataRequired])
    password=StringField('password',validators=[DataRequired])
