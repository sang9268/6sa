import os
from flask import Flask, render_template  # ⭐ render_template 추가

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # ⭐ 반드시 템플릿 반환

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)
