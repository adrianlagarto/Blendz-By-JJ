from flask import Flask, jsonify
from flask_cors import CORS
from routes.Home import Home
from routes.Product import Product
from routes.ScheduleAppointment import Schedule
from routes.About import About

app = Flask(__name__)
cors = CORS(app, origins='*')

app.register_blueprint(Home)
app.register_blueprint(Product)
app.register_blueprint(Schedule)
app.register_blueprint(About)

@app.route("/api/users", methods=['GET'])
def users():
    return jsonify({
      "users": [
        'qwerty',
        'asdfg',
        'zxcvb'
      ]
    })
    
if __name__ == "__main__":
    app.run(debug=True, port=5070)