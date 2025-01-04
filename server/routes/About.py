from flask import Blueprint, jsonify, request

About = Blueprint('About', __name__)

@About.route('/About', methods=['GET','POST'])
def about():
    # Scheduling Appointments 
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"error": "Request body must be JSON"}), 400
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        message = data.get('message')

        return jsonify({"message": "About routes nav"}), 200
      
      
      
      
    return jsonify({"message": "About routes nav!"}), 200
