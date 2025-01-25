from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bcrypt import hashpw, gensalt, checkpw

app = Flask(__name__)

# MongoDB Configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/disasternet"  # Replace with your MongoDB URI
mongo = PyMongo(app)
users_collection = mongo.db.users

# Signup route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if email or username already exists
    if users_collection.find_one({'email': email}):
        return jsonify({'message': 'Email already exists!'}), 400
    if users_collection.find_one({'username': username}):
        return jsonify({'message': 'Username already exists!'}), 400

    # Hash the password
    hashed_password = hashpw(password.encode('utf-8'), gensalt())

    # Save user to MongoDB
    user_id = users_collection.insert_one({
        'username': username,
        'email': email,
        'password': hashed_password,
    }).inserted_id

    return jsonify({'message': 'User created successfully!', 'user_id': str(user_id)}), 201

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Find user by email
    user = users_collection.find_one({'email': email})
    if not user:
        return jsonify({'message': 'Invalid email or password!'}), 401

    # Check password
    if not checkpw(password.encode('utf-8'), user['password']):
        return jsonify({'message': 'Invalid email or password!'}), 401

    return jsonify({'message': f'Welcome {user["username"]}!'}), 200

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
