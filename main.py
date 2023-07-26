from flask import Flask, render_template, request, redirect
import json
from discord_webhook import DiscordWebhook


app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == "GET":
        if request.args.get("msg"):
            msg = request.args.get("msg")
        else: msg = None
        return render_template("index.html", msg=msg)
    if request.method == "POST":
        form = request.form
        webhook = DiscordWebhook(url='https://discord.com/api/webhooks/1129960363601965056/sAxVLp_SOe74zsj3eQ6IfWz5LToc3y2IaXU_tfNlmdHeY_DsqU5hXqPEulpvGK5FqSYB', content=f"""Name: {form['firstname']} {form['lastname']}\nEmail: {form['email']}\nPhone Number: {form['phonenumber']}\nMessage: {form['details']}""")
        response = webhook.execute()
        return redirect("/?msg=Your message has been sent!")

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
