import random
import sqlite3
import string

from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__)


def get_db():
    conn = sqlite3.connect("homeease.db")
    conn.row_factory = sqlite3.Row
    return conn


def make_reference():
    code = "".join(random.choices(string.ascii_uppercase + string.digits, k=6))
    return f"HE-2026-{code}"


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


@app.route("/<path:filename>")
def files(filename):
    return send_from_directory(".", filename)


if __name__ == "__main__":
    app.run(debug=True)
