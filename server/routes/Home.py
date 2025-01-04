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
    
    
    
      
    return jsonify({"message": "Home Apis!"}), 200
