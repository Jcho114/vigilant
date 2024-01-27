import numpy as np
from numpy.polynomial import polynomial as P

def polynomial_regression(coords):
    """
    https://medium.com/analytics-vidhya/understanding-polynomial-regression-5ac25b970e18 
    http://polynomialregression.drque.net/math.html 

    m is degree of polynomial
    n is num of data points
    """
    max_degree = 4
    n = len(coords[0])
    m = n if n < max_degree else max_degree
    
    c = P.polyfit(coords[0], coords[1], m, full=False)

    # print(str(coords))
    # print(f"Coefficients: {c}")

    new_coords = []
    start_i = min(coords[0])
    end_i = max(coords[0])

    # print(f"{start_i}, {end_i}")
    
    for x in np.arange(start_i, end_i, 0.1):
        y = calculate_new_y(c, x)
        new_coords.append([round(x, 4), round(y, 4)])

    return new_coords

def calculate_new_y(c, x):
    # p(x) = c0 + c1x + c2x^2 + c3x^3 + c4x^4 + c5x^5
    sum = 0
    i = 0

    for cef in c:
        sum += cef * pow(x, i)
        i += 1
    
    return sum


def linear_regression(coords, times, time):
    """
    Point slope method
    (y2 - y1)/(x2 - x1)
    y = mx + b

    Least squares

    https://www.cuemath.com/data/least-squares/ 
    https://statskingdom.com/linear-regression-calculator.html 

    m = (n∑xy - ∑y∑x)/n∑x^2 - (∑x)^2
    b = (∑y - m∑x)/n

    Assume that coords and times are sorted based off time

    This function returns a predicted position for the future based off previous
    collected data.
    """

    coords_len = len(coords)
    times_len = len(times)

    # Doesn't make sense to try and predict the past
    if time < times[times_len - 1]:
        return []

    start_x = coords[0][0]
    start_y = coords[0][1]
    end_x = coords[coords_len - 1][0]
    end_y = coords[coords_len - 1][1]

    comp = 0
    x_sum = 0
    y_sum = 0
    x_sum_sqd = 0

    for point in coords:
        x = point[0]
        y = point[1]

        x_sum += x
        y_sum += y
        x_sum_sqd += (x * x)
        comp += (x * y)

    # m = (n∑xy - ∑y∑x)/n∑x^2 - (∑x)^2
    slope = ((comp * coords_len) - (y_sum * x_sum))/((x_sum_sqd * coords_len) - (x_sum * x_sum))
    
    speed = pow((pow(end_y - start_y, 2) + pow(end_x - start_x, 2)), (1/2)) / (times[times_len - 1] - times[0])
    velocity_x = (1 / pow(1 + (pow(slope, 2)), (1/2))) * speed
    velocity_y = (slope / pow(1 + (pow(slope, 2)), (1/2))) * speed
    velocity = [velocity_x, velocity_y]

    # print(f"Slope: {slope}")
    # print(f"Speed: {speed}")
    # print(f"Velocity vector: {velocity}")

    predicted_x_pos = end_x + (velocity_x * (time - times[times_len - 1]))
    predicted_y_pos = end_y + (velocity_y * (time - times[times_len - 1]))
    
    # print(f"Predicted x: {predicted_x_pos}")
    # print(f"Predicted y: {predicted_y_pos}")

    return [predicted_x_pos, predicted_y_pos]

def main():
    x = [9.8, 3.8, 6.0, 0.9, 5.4, 1.4, 16.2, 19.5, 2.1, 0.94, 43.80, 3.9, 1.7]
    y = [7.6, 11, 2.4, 0.49, 4.7, 1.4, 12.20, 10.8, 3.27, 2.16, 28.3, 2.0, 1.41]
    coords = []
    times = [300, 450]

    for i in range(len(x)):
        coord = [x[i], y[i]]
        coords.append(coord)

    print(str(coords))
    linear_regression(coords, times, 500)
    coords = polynomial_regression([x, y])
    # print(f"New coords: {coords}")
    

if __name__ == "__main__":
    main()