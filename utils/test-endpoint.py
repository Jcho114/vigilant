import requests

"""
x = [9.8, 3.8, 6.0, 0.9, 5.4, 1.4, 16.2, 19.5, 2.1, 0.94, 43.80, 3.9, 1.7]
y = [7.6, 11, 2.4, 0.49, 4.7, 1.4, 12.20, 10.8, 3.27, 2.16, 28.3, 2.0, 1.41]
coords = []
times = [300, 450]
"""

def send_request():
    headers = {"x-coords": "9.8,3.8,6.0,0.9,5.4,1.4,16.2,19.5,2.1,0.94,43.80,3.9,1.7",
               "y-coords": "7.6,11,2.4,0.49,4.7,1.4,12.20,10.8,3.27,2.16,28.3,2.0,1.41",
               "times": "300,450",
               "prediction-time": "500"}

    url = "http://localhost:3002"
    endpoint = "/api/v1/linear"

    req = requests.post(url + endpoint, headers=headers)

    
    if req.status_code == 200:
        print(str(req.text))

    endpoint = "/api/v1/polynomial"

    req = requests.post(url + endpoint, headers=headers)

    if req.status_code == 200:
        print(str(req.text))

def main():
    send_request()

if __name__ == "__main__":
    main()