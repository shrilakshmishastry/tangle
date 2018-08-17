from flask_wtf import FlaskForm
from wtforms import PasswordField,StringField
from wtforms.validators import DataRequired,Email

from ..models import User

class RegistrationForm(FlaskForm):
    Form 
