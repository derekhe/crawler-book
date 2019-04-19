import pickle

class SignCapture:
    def request(self, flow):
        if 'evcard' in flow.request.url:
            with open('sign.dump', 'wb') as f:
                data = flow.request.query.fields
                pickle.dump(flow.request.query.fields, f)
            
addons = [
    SignCapture()
]