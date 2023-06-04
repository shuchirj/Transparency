from flask import Flask, render_template
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/old")
def old():
    return render_template("old.html")


@app.route("/extras")
def extras():
    return render_template("guides.html")

@app.route("/desecurly")
def desecurly():
    return render_template("desecurly.html")

@app.route("/resume")
def resume():
    return render_template("resume.html")



app.run(host='0.0.0.0', port=5001, debug=True)
