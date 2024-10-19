from flask import jsonify, Blueprint, request
from flask_login import login_required, login_user, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from app.models import db, User
from app import bcrypt
from sqlalchemy import text
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
bp = Blueprint('main', __name__)


@bp.route('/')
def index():
    #Try query the user table to see if the connection works
    users = User.query.all()
    return f"Total user: {len(users)}"

#route to test if the backend is working
@bp.route('/api/test_db')
def test_db():
    try:
        result = db.session.execute(text('SELECT 1'))
        return "Connection succesfull!"
    except Exception as e:
        return f'Error connecting to the database: {str(e)}'
    
@bp.route("/api/register", methods=['POST'])
def register():
    data = request.json
    print(f"Received data: {data}")  # Debugging line
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = User(username=username, email=email, password_hash=hashed_password)

    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@bp.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Email and Password are required"}), 400
    
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password_hash, password):
        login_user(user)
        return jsonify({"message": "Logged in successfully"}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401
    
@bp.route("/api/logout", methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logged out succesfully"}), 200



