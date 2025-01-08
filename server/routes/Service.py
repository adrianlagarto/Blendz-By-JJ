from flask import Blueprint, jsonify, request

Service = Blueprint('Service', __name__)

@Service.route('/Service', methods=['GET','POST'])
def service():
    # Scheduling Appointments 
    if request.method == 'GET':
      """     
      Service_type: "Cut",
      Price: 20,
      Description: "Traditional close cropped styles only which includes: fades and tapers starting at 1 or longer with light scissor work on top; comb overs; crew cuts; pompadours. ",
      
      Sends list of services
      """
      
      return jsonify({
        "price": [
          'qwerty',
          'asdfg',
          'zxcvb'
        ]
      }) 
    return jsonify({"message": "About routes nav!"}), 200
  
  
