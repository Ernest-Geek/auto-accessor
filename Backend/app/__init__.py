from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate

# Initialize Flask extensions
db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    
    # Set the Secret Key for session management (Flask-Login requires it)
    app.config['SECRET_KEY'] = 'your-secret-key'  # Replace this with a secure key
    
    # Load other configurations from the config object
    app.config.from_object('config.Config')

    # Initialize extensions with the app
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)

    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    app.config['SESSION_COOKIE_SECURE'] = True  # Make sure your app uses HTTPS for production, for localhost it's fine without.


    # Configure LoginManager
    login_manager.login_view = 'main.login'  # The view to redirect unauthenticated users
    login_manager.login_message_category = 'info'

    # Import the User model after db initialization
    from app.models import User

    # Register the user_loader function
    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    # Import and register the routes blueprint
    from app.routes import bp as routes_bp
    app.register_blueprint(routes_bp)

    return app

