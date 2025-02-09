import logging
from flask import Blueprint, jsonify, request
from flask_login import login_user, login_required, logout_user, current_user
from werkzeug.security import check_password_hash
from models import User
from flask_cors import CORS, cross_origin

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s', filename='login.log')

Login = Blueprint('Login', __name__)
CORS(Login, resources={r"/*": {"origins": "*"}})  # Enable CORS for this blueprint

@Login.route('/login', methods=['POST'])
@cross_origin()
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        login_user(user)
        logging.info(f'User {username} logged in successfully')
        return jsonify({"message": "Logged in successfully", "is_admin": user.is_admin}), 200
    logging.warning(f'Failed login attempt for username: {username}')
    return jsonify({"error": "Invalid credentials"}), 401

@Login.route('/logout', methods=['POST'])
@cross_origin(supports_credentials=True)
@login_required
def logout():
    try:
        username = current_user.username
        logout_user()
        logging.info(f'User {username} logged out successfully')
        return jsonify({"message": "Logged out successfully"}), 200
    except Exception as e:
        logging.error(f'Error during logout: {e}')
        return jsonify({"error": "An error occurred during logout"}), 500
