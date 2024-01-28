from flask import Flask
from flask import request
import prediction

app = Flask(__name__)

# flask --app trend-api run --port 3002


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/api/v1/linear", methods=["POST"])
def linear_reg():
    x_coords = request.headers.get("x-coords")
    y_coords = request.headers.get("y-coords")
    times = request.headers.get("times")
    time = request.headers.get("prediction-time", type=int)

    # Bad request (Formatting issue)
    if "," not in x_coords or "," not in y_coords or "," not in times:
        return 400

    x_coords = x_coords.rsplit(",")
    y_coords = y_coords.rsplit(",")
    times = times.rsplit(",")

    x_coords = string_list_to_float(x_coords)
    y_coords = string_list_to_float(y_coords)
    times = string_list_to_float(times)
    coords = []
    size = len(x_coords)

    for i in range(size):
        new_coord = [x_coords[i], y_coords[i]]

        coords.append(new_coord)

    return prediction.linear_regression(coords, times, time)


def string_list_to_float(string_num_list):
    string_num_list = [float(i) for i in string_num_list]

    return string_num_list


@app.route("/api/v1/polynomial", methods=["POST"])
def polynomial_reg():
    x_coords = request.headers.get("x-coords")
    y_coords = request.headers.get("y-coords")

    # Bad request (Formatting issue)
    if "," not in x_coords or "," not in y_coords:
        return 400

    x_coords = x_coords.rsplit(",")
    y_coords = y_coords.rsplit(",")

    x_coords = string_list_to_float(x_coords)
    y_coords = string_list_to_float(y_coords)

    return prediction.polynomial_regression([x_coords, y_coords])
