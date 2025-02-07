from flask import Blueprint, jsonify, request
from models import ContactForm, db
from flask_cors import CORS, cross_origin

Contact = Blueprint('Contact', __name__)
# CORS(Contact, resources={r"/*": {"origins": "*"}}) 

@Contact.route('/Contact', methods=['GET', 'POST'])
@cross_origin()
def contact():
    try:
        if request.method == 'POST':
            if not request.is_json:
                return jsonify({"error": "Request body must be JSON"}), 400
            
            data = request.get_json()
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            email = data.get('email')
            message = data.get('message')
            
            print(f'first_name: {first_name}')
            print(f'last_name: {last_name}')
            print(f'message: {message}')
            print(f'email: {email}')
            
            # new_contact = ContactForm(
            #     first_name=first_name,
            #     last_name=last_name,
            #     email=email,
            #     message=message
            # )
            
            # db.session.add(new_contact)
            # db.session.commit()
            # ISSUE with DB connection 
          
            return jsonify({"message": "Message received!"}), 200
        
        return jsonify({"message": "Get Request Contact routes received!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500