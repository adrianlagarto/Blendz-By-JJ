from flask import Blueprint, jsonify, request

Home = Blueprint('Home', __name__)

@Home.route('/', methods=['GET','POST'])
def home():
    # Contact Us Form
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"error": "Request body must be JSON Post Req 400"}), 400
        
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        message = data.get('message')
        
        # save on db later
        
        return jsonify({"message": "Message received!"}), 200
    
    if request.method == 'GET':
        
        return jsonify({
            "services": [
            {"availability": {
                            "Monday": "8 AM - 5 PM",
                            "Tuesday": "8 AM - 5 PM",
                            "Wednesday": "8 AM - 5 PM",
                            "Thursday": "8 AM - 5 PM",
                            "Friday": "8 AM - 5 PM",
                            "Saturday": "Off",
                            "Sunday": "Off"
                        }}
          ]
        }), 200
    
    return jsonify({"message": "Home Apis!"}), 200
    
    
      
    return jsonify({"message": "Home Apis!"}), 200
