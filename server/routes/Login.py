from flask import Blueprint, jsonify, request
from flask_login import login_user, login_required, logout_user, current_user
from werkzeug.security import check_password_hash
from models import User
from flask_cors import CORS

Login = Blueprint('Login', __name__)
CORS(Login)  # Enable CORS for this blueprint

@Login.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        login_user(user)
        return jsonify({"message": "Logged in successfully", "is_admin": user.is_admin}), 200
    return jsonify({"error": "Invalid credentials"}), 401

@Login.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logged out successfully"}), 200