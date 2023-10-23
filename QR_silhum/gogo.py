from flask import Flask, request, jsonify
import paramiko

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def gogo():
    return '<button onclick="location.href=`http://localhost:2000/`">gogogo</button>'

if __name__ == '__main__':
    app.run(debug=True, port=5000)






