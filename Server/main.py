import sys
sys.path.insert(0,'./src')

from src import app, socketio


app.debug = True

if __name__ == "__main__":
    app.run(host= '0.0.0.0',debug=True)
    
