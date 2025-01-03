from flask import Blueprint, jsonify, request

"""
change this to Register routes....
"""


Schedule = Blueprint('Schedule', __name__)

@Schedule.route('/Schedule', methods=['GET','POST'])
def schedule():
    # Scheduling Appointments 
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"error": "Request body must be JSON"}), 400
          
        date = data.get('first_name')
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        message = data.get('message')
        
        # Handle the form data (e.g., send an email)
        
    
    
        return jsonify({"message": "Appointment Scheduled!"}), 200
      
    return jsonify({"message": "Schedule Appointment routes!"}), 200
