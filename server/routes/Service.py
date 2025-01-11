from flask import Blueprint, jsonify, request

Service = Blueprint('Service', __name__)
@Service.route('/Service', methods=['GET'])
def service():
    if request.method == 'GET':
        return jsonify({
          "services": [
            {
              "Service_type": "Cut",
              "Price": 20,
              "Description": "Traditional close cropped styles only which includes: fades and tapers starting at 1 or longer with light scissor work on top; comb overs; crew cuts; pompadours."
            },
            {
              "Service_type": "Shave",
              "Price": 15,
              "Description": "Classic straight razor shave with hot towel treatment."
            },
            {
              "Service_type": "Trim",
              "Price": 10,
              "Description": "Beard and mustache trim with precision shaping."
            }
          ]
        }), 200

    return jsonify({"message": "About routes nav!"}), 200
  
  
