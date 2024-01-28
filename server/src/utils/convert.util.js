function convertDateToMinutes(date) {
    var date_object = new Date(date);
    var time = (date_object.getTime() / 1000) / 60;
    
    // console.log(time);
    return time;
}

function convertResultsToCorrectFormat(reports) {
    let lat_vals = [];
    let long_vals = [];
    let times_vals = [];

    let x_coords = "";
    let y_coords = "";
    let times = "";

    let rep_len = reports.length;
    let max = 0;
    let max_index = 0;

    for (let i = 0; i < rep_len; i++) {
        lat_vals.push(reports[i]["latitude"]);
        long_vals.push(reports[i]["longitude"]);
        times.push(convertDateToMinutes(reports[i]["date"]));
    }

    // Need to sort them (lat_vals, long_vals, and times_vals by the times here
    for (let i = 0; i < rep_len; i++) {
        for (let j = i + 1; j < rep_len; j++) {
            if (times[j] < times[i]) {
                let temp = times[i];
                times[i] = times[j];
                times[j] = temp;
                
                temp = lat_vals[i];
                lat_vals[i] = lat_vals[j];
                lat_vals[j] = temp;

                temp = long_vals[i];
                long_vals[i] = long_vals[j];
                long_vals[j] = temp;
            }
        }
    }

    for (let i = 0; i < rep_len; i++) {
        x_coords += str(lat_vals[i]);
        y_coords += str(long_vals[i]);
        times += str(times_vals[i]);

        // End early, we don't want to add commas to the last value
        if (i == rep_len - 1) { 
            break;
        }

        x_coords += ",";
        y_coords += ",";
        times += ",";
    }

    return [x_coords, y_coords, times];
}

// convertDateToMinutes("2024-01-23 19:56:00.000000")
// convertDateToMinutes("2024-01-20 19:56:00.000000")
// convertDateToMinutes("2024-01-13 19:56:00.000000")
// convertDateToMinutes("2023-09-25 23:21:21.23154")
// convertDateToMinutes("2023-01-20 23:21:21.23154")