from flask import Blueprint, jsonify, request

Booknow = Blueprint('Booknow', __name__)

# Initial schedule data
schedule_data = [
    {"date": "2025-01-20", "time": "10:00", "price": 50},
    {"date": "2025-01-18", "time": "14:00", "price": 75},
]

@Booknow.route('/booknow', methods=['GET'])
def get_schedule():
    return jsonify(schedule_data)

@Booknow.route('/booknow', methods=['POST'])
def update_schedule():
    global schedule_data
    data = request.get_json()
    schedule_data = data  # Update the schedule data
    return jsonify({"message": "Schedule updated successfully"}), 200

@Booknow.route('/payment', methods=['POST'])
def process_payment():
    data = request.get_json()
    date = data.get('date')
    time = data.get('time')
    price = data.get('price')
    # Process payment logic here
    return jsonify({"message": "Payment successful"}), 200