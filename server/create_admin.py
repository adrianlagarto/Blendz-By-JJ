from werkzeug.security import generate_password_hash
from models import User, db

def create_admin_user():
    username = "Admin"
    password = "12345"
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    admin_user = User(username=username, password=hashed_password, is_admin=True)
    db.session.add(admin_user)
    db.session.commit()
    print("Admin user created successfully")

# Run the function to create the admin user
if __name__ == "__main__":
    create_admin_user()