import os
import random
import sqlite3
import string

from flask import Flask, jsonify, redirect, request, send_from_directory, session, url_for

from init_db import CREATE_TABLE_SQL
app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "dev-secret-change-me")

# DEMO ONLY password. Set a real one via environment variable, e.g. PowerShell:
#   $env:HOMEASE_ADMIN_PASSWORD="your-secret-here"
# Never commit real passwords in code.
ADMIN_PASSWORD = os.environ.get("HOMEASE_ADMIN_PASSWORD", "admin123")


def get_db():
    conn = sqlite3.connect("homeease.db")
    conn.row_factory = sqlite3.Row
    return conn


def make_reference():
    code = "".join(random.choices(string.ascii_uppercase + string.digits, k=6))
    return f"HE-2026-{code}"


def is_admin():
    return session.get("admin") is True


def admin_page(rows=None, error=None):
    if rows is None:
        err = f'<p style="color:#b91c1c">{error}</p>' if error else ""
        return ("<!doctype html><html><head><meta charset='utf-8'>"
                "<title>Admin login - HomeEase</title></head>"
                "<body style='font-family:sans-serif;max-width:420px;margin:60px auto;padding:0 16px'>"
                "<h1>HomeEase admin</h1>" + err +
                "<form method='post'>"
                "<label>Password<br><input type='password' name='password' required "
                "style='width:100%;padding:8px'></label><br><br>"
                "<button type='submit' style='padding:10px 20px'>Log in</button>"
                "</form></body></html>")
    rows_html = "".join(
        "<tr><td>" + r["reference"] + "</td><td>" + r["service"] + "</td><td>" + r["name"] +
        "</td><td>" + r["phone"] + "</td><td>" + r["city"] + "</td><td>" + r["date"] +
        "</td><td>" + r["time_window"] + "</td></tr>"
        for r in rows
    )
    return ("<!doctype html><html><head><meta charset='utf-8'>"
            "<title>Requests - HomeEase admin</title></head>"
            "<body style='font-family:sans-serif;max-width:1000px;margin:40px auto;padding:0 16px'>"
            "<h1>Service requests</h1>"
            "<p><a href='/admin/logout'>Log out</a></p>"
            "<table border='1' cellpadding='8' cellspacing='0'>"
            "<tr><th>Reference</th><th>Service</th><th>Name</th><th>Phone</th>"
            "<th>City</th><th>Date</th><th>Time</th></tr>"
            + rows_html + "</table></body></html>")


@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/api/request", methods=["POST"])
def api_request():
    data = request.get_json(force=True) or {}
    required = ["service", "name", "phone", "city", "address", "date", "time_window"]
    missing = [f for f in required if not data.get(f)]
    if missing:
        return jsonify({"error": "Missing fields", "missing": missing}), 400
    ref = make_reference()
    conn = get_db()
    conn.execute(
        """INSERT INTO requests
           (reference, service, name, phone, email, city, address, date, time_window, details)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
        (ref, data.get("service"), data.get("name"), data.get("phone"),
         data.get("email"), data.get("city"), data.get("address"),
         data.get("date"), data.get("time_window"), data.get("details")),
    )
    conn.commit()
    conn.close()
    return jsonify({"reference": ref})


@app.route("/admin", methods=["GET", "POST"])
def admin():
    if request.method == "POST":
        if request.form.get("password") == ADMIN_PASSWORD:
            session["admin"] = True
            return redirect(url_for("admin"))
        return admin_page(error="Wrong password. Try again."), 401
    if not is_admin():
        return admin_page()
    conn = get_db()
    rows = conn.execute("SELECT * FROM requests ORDER BY id DESC").fetchall()
    conn.close()
    return admin_page(rows=rows)


@app.route("/admin/logout")
def admin_logout():
    session.pop("admin", None)
    return redirect(url_for("admin"))


@app.route("/<path:filename>")
def files(filename):
    return send_from_directory(".", filename)


if __name__ == "__main__":
    app.run(debug=True)
