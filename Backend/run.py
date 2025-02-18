from app import create_app, db
from flask_cors import CORS

# Initialize the app with CORS support
app = create_app()

# Allow both local and production environments
from flask_cors import CORS
CORS(app, resources={r"/api/*": {"origins": ["http://127.0.0.1:5501", "http://www.worktoolz.tech"]}})

# Ensure all database tables are created
with app.app_context():
    db.create_all()

# Run the app
if __name__ == "__main__":
    app.run(debug=True)


