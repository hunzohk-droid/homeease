import sqlite3

CREATE_TABLE_SQL = """
CREATE TABLE IF NOT EXISTS requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reference TEXT NOT NULL,
    service TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    city TEXT NOT NULL,
    address TEXT NOT NULL,
    date TEXT NOT NULL,
    time_window TEXT NOT NULL,
    details TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
)
"""

def init_db():
    conn = sqlite3.connect("homeease.db")
    conn.execute(CREATE_TABLE_SQL)
    conn.commit()
    conn.close()
    print("Logbook ready: homeease.db")

if __name__ == "__main__":
    init_db()
