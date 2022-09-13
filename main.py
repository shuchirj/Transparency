from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/extras")
def extras():
    return render_template("guides.html")

@app.route("/projects")
def projects():
    data = json.loads(open("data/projects.json").read())
    return render_template("projects.html", data=data)

app.run(port=5001, debug=True)