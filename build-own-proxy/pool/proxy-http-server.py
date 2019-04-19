from flask import Flask
from flask_restful import Resource, Api
import redis

app = Flask(__name__)
api = Api(app)

r = redis.Redis(host='localhost', encoding="utf-8", decode_responses=True)

class Proxy(Resource):
    def get(self):
        return r.keys("*")

api.add_resource(Proxy, '/proxy.json')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000)