from flask import Flask, render_template, request, redirect, flash
import json
from discord_webhook import DiscordWebhook
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from_email = "contact@shuchir.dev"
to_email = ["throwaway@shuchir.dev", "coolcodersj@gmail.com", "shuchir@industeeltech.org", "shuchir@jrbirding.org"]

app = Flask(__name__)
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

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

@app.route("/request", methods=['GET', 'POST'])
def requestwork():
    if request.method == "GET":
        return render_template("request.html")
    form = request.form
    name = form['name']
    email = form['email']
    reqtype = form['type']
    other = form['other']
    message = form['message']
    compensation = form['compensation']

    html = f"""
    <html>
    <head>
    <style>
    body {{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }}
    </style>
    </head>
    <body>
    <h1>New Request</h1>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Request Type: {reqtype}</p>
    <p>Other: {other}</p>
    <p>Message: {message}</p>
    <p>Compensation: {compensation}</p>
    </body>
    </html>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = "New Contact Request"
    msg['From'] = from_email
    msg['To'] = ", ".join(to_email)
    msg.attach(MIMEText(html, 'html'))

    s = smtplib.SMTP('smtp-relay.brevo.com', 587)
    s.starttls()
    s.login("shuchir.jain@gmail.com", "xsmtpsib-118c982ec22b8aab7f0a81757f84855189d0e81f0b4feb42254e51675c3cfbf2-J1vYnTGMwcOkxEgQ")
    s.sendmail(from_email, to_email, msg.as_string())
    s.quit()

    flash("Your message has been sent!")
    return redirect("/request")

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
