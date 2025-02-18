from flask import Flask
from flask_cors import CORS

# Initialize the app
app = create_app()

# Allow requests from your frontend domain
CORS(app, resources={r"/api/*": {"origins": ["https://www.worktoolz.tech"]}})

# Your routes
@app.route('/api/login', methods=['POST'])
def login():
    return "Login successful!"

if __name__ == "__main__":
    app.run(debug=True)



