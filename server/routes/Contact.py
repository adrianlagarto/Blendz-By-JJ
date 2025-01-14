from flask import Blueprint, jsonify, request
# from main import db
from models import ContactForm

Contact = Blueprint('Contact', __name__)

@Contact.route('/Contact', methods=['GET','POST'])
def contact():
    # Contact Us Form
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"error": "Request body must be JSON"}), 400
        
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        message = data.get('message')
        
        new_contact = ContactForm(
            first_name=first_name,
            last_name=last_name,
            email=email,
            message=message
        )
        
        # db.session.add(new_contact)
        # db.session.commit()
      
        return jsonify({"message": "Message received!"}), 200
    
    # if request.method == 'Get':
        
    #     return jsonify({"message": "Get Rquest Contact routes received!"}), 200
    
      
    return jsonify({"message": "Get Request Contact routes received!"}), 200
