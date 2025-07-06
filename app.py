from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO
import pandas as pd
import time
import threading

app = Flask(__name__)
socketio = SocketIO(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/data")
def all_data():
    try:
        df = pd.read_csv("stats.csv")
        grouped = df.groupby('Container')
        result = {}
        for name, group in grouped:
            result[name] = {
                'time': group['Time'].tolist(),
                'cpu': group['CPU (%)'].str.replace('%', '').astype(float).tolist(),
                'mem_used': group['Mem Used'].tolist()
            }
        return jsonify(result)
    except Exception as e:
        print(f"[ERROR] reading CSV: {e}")
        return jsonify({})

def background_thread():
    last_len = 0
    while True:
        try:
            df = pd.read_csv("stats.csv")
            if len(df) > last_len:
                new_data = df.iloc[last_len:]
                grouped = new_data.groupby('Container')
                result = {}
                for name, group in grouped:
                    result[name] = {
                        'time': group['Time'].tolist(),
                        'cpu': group['CPU (%)'].str.replace('%', '').astype(float).tolist(),
                        'mem_used': group['Mem Used'].tolist()
                    }
                socketio.emit("update", result)
                last_len = len(df)
        except Exception as e:
            print(f"[WebSocket ERROR] {e}")
        time.sleep(5)

@socketio.on("connect")
def handle_connect():
    print("Client connected")

if __name__ == "__main__":
    thread = threading.Thread(target=background_thread)
    thread.daemon = True
    thread.start()
    socketio.run(app, host="0.0.0.0", port=5000)
