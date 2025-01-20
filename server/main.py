from flask import Flask, redirect, url_for, request, jsonify, Blueprint
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_cors import CORS
from routes.Home import Home
from routes.Product import Product
from routes.ScheduleAppointment import Schedule
from routes.About import About
from routes.Service import Service
from routes.Login import Login
from routes.Contact import Contact
from routes.Booknow import Booknow
from models import db, User, Appointment, ContactForm, AdminService
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

db.init_app(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'


with app.app_context():
    db.create_all()
    
cors = CORS(app, origins='*')

app.register_blueprint(Home)
app.register_blueprint(Product, url_prefix='/')
app.register_blueprint(Schedule)
app.register_blueprint(About, url_prefix='/')
app.register_blueprint(Service)
app.register_blueprint(Contact)
app.register_blueprint(Login)
app.register_blueprint(Booknow)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class AdminModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.is_admin

    def inaccessible_callback(self, name, **kwargs):
        return redirect(url_for('login'))
      
admin = Admin(app, name='Admin Panel', template_mode='bootstrap3')
admin.add_view(AdminModelView(AdminService, db.session))
admin.add_view(AdminModelView(User, db.session))
admin.add_view(AdminModelView(Appointment, db.session))
admin.add_view(AdminModelView(ContactForm, db.session))

# @app.route("/api/users", methods=['GET'])
# def users():
#     return jsonify({
#       "users": [
#         'qwerty',
#         'asdfg',
#         'zxcvb'
#       ]
#     })
    
if __name__ == "__main__":
    app.run(debug=True, port=5070)