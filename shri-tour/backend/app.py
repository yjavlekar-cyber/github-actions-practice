from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

menu = {
    "starters": [
        {"name": "Chicken Tandoori", "price": 350, "type": "non-veg"},
        {"name": "Paneer Tikka", "price": 280, "type": "veg"},
        {"name": "Prawn Koliwada", "price": 420, "type": "non-veg"},
        {"name": "Veg Samosa", "price": 120, "type": "veg"},
    ],
    "mains": [
        {"name": "Butter Chicken", "price": 450, "type": "non-veg"},
        {"name": "Dal Makhani", "price": 280, "type": "veg"},
        {"name": "Fish Thali", "price": 550, "type": "non-veg"},
        {"name": "Paneer Butter Masala", "price": 320, "type": "veg"},
    ],
    "desserts": [
        {"name": "Gulab Jamun", "price": 180, "type": "veg"},
        {"name": "Mango Kulfi", "price": 200, "type": "veg"},
        {"name": "Jalebi", "price": 150, "type": "veg"},
        {"name": "Ras Malai", "price": 220, "type": "veg"},
    ],
    "drinks": [
        {"name": "Masala Chai", "price": 80, "type": "veg"},
        {"name": "Mango Lassi", "price": 150, "type": "veg"},
        {"name": "Fresh Lime Soda", "price": 100, "type": "veg"},
        {"name": "Rose Sharbat", "price": 120, "type": "veg"},
    ],
}


@app.route("/")
def home():
    return jsonify({"status": "ok", "restaurant": "Shri Tour", "message": "API is running"})


@app.route("/health")
def health():
    return jsonify({"status": "healthy"})


@app.route("/menu")
def get_menu():
    return jsonify(menu)


@app.route("/menu/<category>")
def get_category(category):
    if category in menu:
        return jsonify(menu[category])
    return jsonify({"error": "Category not found"}), 404


@app.route("/specials")
def specials():
    return jsonify([
        {"name": "Konkan Fish Curry", "price": 650, "chef_pick": True},
        {"name": "Malvani Mutton", "price": 750, "chef_pick": False},
        {"name": "Mango Shrikhand", "price": 300, "chef_pick": False},
    ])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
