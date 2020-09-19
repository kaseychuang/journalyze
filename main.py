from flask import Flask, request, send_file, render_template
import json

app = Flask(__name__, static_url_path='', static_folder="public")

@app.route('/demo')
def demo():
    return json.dump("hi")

app.run(host="127.0.0.1", port=5000)