from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_migrate import Migrate

#initialize flask extensions
db = SQLAlchemy()
bcrypt = Bcrypt()
login_manager = LoginManager()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    #initialize extensions with the app
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)

    #configure loginManager
    login_manager.login_view = 'main.login'
    login_manager.login_message_category = 'info'

    #import the models here after the db has been initialised
    from app.models import User

    #Register the user_loader function
    @login_manager.user_loader
    def load_ser(user_id):
        return User.query.get(int(user_id))
    
    from app.routes import bp as routes_bp
    app.register_blueprint(routes_bp)

    return app
