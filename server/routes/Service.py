from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from models import db, AdminService

Service = Blueprint('Service', __name__)

@Service.route('/Service', methods=['GET'])
def get_services():
    services = Service.query.all()
    services_list = [
        {
            "id": service.id,
            "service_type": service.service_type,
            "price": service.price,
            "description": service.description
        } for service in services
    ]
    return jsonify({"services": services_list}), 200

@Service.route('/Service/<int:id>', methods=['PUT'])
@login_required
def update_service(id):
    if not current_user.is_admin:
        return jsonify({"error": "Unauthorized"}), 403

    data = request.get_json()
    service = AdminService.query.get_or_404(id)
    service.description = data.get('description', service.description)
    db.session.commit()
    return jsonify({"message": "Service updated!"}), 200