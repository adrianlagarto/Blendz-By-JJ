from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from flask_cors import cross_origin

CheckSession = Blueprint('CheckSession', __name__)

@CheckSession.route('/check_session', methods=['GET'])
@cross_origin(supports_credentials=True)
@login_required
def check_session():
    return jsonify({
        "is_admin": current_user.is_admin,
        "username": current_user.username
    }), 200
    
