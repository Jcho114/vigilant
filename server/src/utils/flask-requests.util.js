// x_coords are latitude values, y_coords are longitude values, 
// times are the minutes since the 1970 time thing, time is date 
// we want to prediction in time since the 1970 thing
// all numbers are separated by only a comma
async function postData(url = "", x_coords = "9.8,3.8,6.0,0.9,5.4,1.4,16.2,19.5,2.1,0.94,43.80,3.9,1.7", y_coords = "7.6,11,2.4,0.49,4.7,1.4,12.20,10.8,3.27,2.16,28.3,2.0,1.41", times = "300,450", prediction_time = "500") {
    console.log(url);

    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "x-coords": x_coords,
        "y-coords": y_coords,
        "times": times,
        "prediction-time": prediction_time
      },
      mode: "cors",
    });

    return response.text(); 
}
  
// postData("http://10.150.237.54:3002/api/v1/linear").then((data) => {
//     console.log(data);
// });

// postData("http://10.150.237.54:3002/api/v1/polynomial").then((data) => {
//     console.log(data);
// });


// let text = postData("http://localhost:3002/");
// console.log(text);
  