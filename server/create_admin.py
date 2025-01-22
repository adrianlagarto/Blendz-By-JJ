import getpass
from werkzeug.security import generate_password_hash
from models import db, User
from main import app

def create_admin_user():
    username = "Admin"
    password = getpass.getpass("Enter password for admin user: ")
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    admin_user = User(username=username, password=hashed_password, is_admin=True)
    with app.app_context():
        db.session.add(admin_user)
        db.session.commit()
    print("Admin user created successfully")

if __name__ == "__main__":
    create_admin_user()