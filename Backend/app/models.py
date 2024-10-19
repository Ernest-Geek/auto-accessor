from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import UserMixin
from app import db, bcrypt

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)  # Fixed typo in Column
    email = db.Column(db.String(100), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())  # Fixed typo in Column

    # Set the password using Flask-Bcrypt
    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    # Check the password using Flask-Bcrypt
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
    # Always return True since this user is active
    @property
    def is_active(self):
        return True
    
    # Return True once the user is authenticated
    @property
    def is_authenticated(self):
        return True
    
    # Return False since we are dealing with registered users
    @property
    def is_anonymous(self):
        return False
    
    # Return the user ID as a string (required by Flask-Login)
    def get_id(self):
        return str(self.id)
    
    def __repr__(self):
        return f'<User {self.username}>'
