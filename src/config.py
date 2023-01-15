from decouple import config
class Config:
    SECRET_KEY=config("SECRET_KEY")
    SESSION_TYPE=config("SESSION_TYPE")
    
class DevelopmentConfig(Config):
    DEBUG = config("DEBUG")

config={
    'development': DevelopmentConfig
}