from flask import Flask, jsonify
from flask_cors import CORS
from routes.Home import Home
from routes.Product import Product
from routes.ScheduleAppointment import Schedule
from routes.About import About
from routes.Service import Service
from routes.Login import Login
from routes.Contact import Contact
from models import db, Appointment
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db.init_app(app)

# with app.app_context():
#     db.create_all()

cors = CORS(app, origins='*')



app.register_blueprint(Home)
app.register_blueprint(Product, url_prefix='/')
app.register_blueprint(Schedule)
app.register_blueprint(About, url_prefix='/')
app.register_blueprint(Service)
app.register_blueprint(Contact)
app.register_blueprint(Login)

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