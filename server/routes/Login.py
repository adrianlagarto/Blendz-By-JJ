from flask import Blueprint, jsonify, request

Login = Blueprint('Login', __name__)

@Login.route('/Login', methods=['GET','POST'])
def login():
    # Contact Us Form
    if request.method == 'POST':
      data = request.get_json()
      username = data.get('username')
      password = data.get('password')
      # if username in users and users[username]['password'] == password:
      #     user = User(username)
      #     login_user(user)
      #     return jsonify({"message": "Logged in successfully!"}), 200
      return jsonify({"error": "Invalid credentials"}), 401
    
    
    
      
    return jsonify({"message": "Login Apis!"}), 200
