from app import create_app, db
from flask_cors import CORS

# Initialize the app with CORS support
app = create_app()

# Allow both local and production environments
CORS(app, resources={r"/api/*": {"origins": ["https://www.worktoolz.tech", "https://auto-accessor.vercel.app", ]}})

# Ensure all database tables are created
with app.app_context():
    db.create_all()

# Run the app
if __name__ == "__main__":
    app.run(debug=True)


