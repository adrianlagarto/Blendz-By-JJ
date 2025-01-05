from flask import Blueprint, jsonify, request
from models import db, Appointment

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
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        message = data.get('message')
        price = data.get('price')
        date = data.get('date')
        time = data.get('time')
        
        # Create a new Appointment instance
        new_appointment = Appointment(
            first_name=first_name,
            last_name=last_name,
            email=email,
            message=message,
            price=price,
            date=date,
            time=time
        )
        
        # Add and commit the new appointment to the database
        db.session.add(new_appointment)
        db.session.commit()
        
        return jsonify({"message": "Appointment Scheduled!"}), 200
    
    # Admin control the availability and price
    if request.method == 'GET': 
        # if not request.is_json:
        #     return jsonify({"error": "Request body must be JSON Get Req 400"}), 400
        # data = request.get_json()

        # date = data.get('date')
        # time = data.get('time')
        # price = data.get('price')

        return jsonify({
            "training_level": "Advance",
            "date": "2025-01-03",
            "time": "10:00",    
            "price": 100,
            "message": "Get the options for the time, date for the session!"
        }), 200  
    
      
    return jsonify({"message": "Schedule Appointment routes!"}), 200
