from flask import Blueprint, jsonify, request

Product = Blueprint('Product', __name__)

@Product.route('/Product', methods=['GET','POST'])
def merch():
    # Product form
    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"error": "Request body must be JSON"}), 400
        data = request.get_json()
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        message = data.get('message')
        
        return jsonify({"message": "Message received!"}), 200
      
    if request.method == 'GET':
        if not request.is_json:
            return jsonify({"error": "Request body must be JSON. Product routes Fail"}), 400
        data = request.get_json()
        price = data.get('price')
        image = data.get('iamge')
        title = data.get('title')
        description = data.get('description')
      
        return jsonify({"message": "received detail for the Product routes!"}), 200
    
        
      
    return jsonify({"message": "Home Apis!"}), 200
