class Config:
    SECRET_KEY = 'mysecretkey'
    
class DevelopmentConfig(Config):
    DEBUG = False
    MYSQL_HOST='localhost'
    MYSQL_USER='root'
    MYSQL_PASSWORD=''
    MYSQL_DB='camaronesa_store'
    RUN = 3000

config={
    'development': DevelopmentConfig
}