import random
import string
import datetime

"""
Report {
    report_id: String,
    validation: Boolean,
    latitude: Number,
    longitude: Number,
    type: String,
    unit: String,
    amount: Number,
    date: Date,
    description: String,
    image: String,
}
"""

def gen_data():
    bools = ["true", "false"]
    types = ["danger", "warning", "info"]
    units = ["tank", "infantry", "helicopter", "plane"]
    data = "report_id, validation, latitude, longitude, type, unit, amount, date, description, image\n"

    for _ in range(1000):
        rep_id = get_rand_string()
        validation = random.choice(bools)
        latitude = get_rand_float(49.0, 51.0)
        longitude = get_rand_float(32, 35)
        type = random.choice(types)
        unit = random.choice(units)
        amount = random.randint(1, 1000)
        date = datetime.datetime.now()
        description = get_rand_string()
        image = get_rand_string() + ".png"

        data += "{}, {}, {}, {}, {}, {}, {}, {}, {}, {}\n".format(rep_id, validation, latitude, longitude, type, unit, amount, date, description, image)
    
    return data

def get_rand_string():
    return ''.join(random.choices(string.ascii_lowercase, k=10))

def get_rand_float(a, b):
    return random.uniform(a, b)

def write_data(data):
    with open("./report-dummy-data.csv", "w", encoding="utf-8") as f:
        f.write(data)

def main():
    data = gen_data()
    write_data(data)


if __name__ == "__main__":
    main()