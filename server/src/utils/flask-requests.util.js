// x_coords are latitude values, y_coords are longitude values, 
// times are the minutes since the 1970 time thing, time is date 
// we want to prediction in time since the 1970 thing
// all numbers are separated by only a comma
async function postData(url = "http://localhost:3002/", x_coords = "3,2,12", y_coords = "5,2,1", times = "10,21", prediction_time = "30") {
    let text = "";
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "x-coords": x_coords,
        "y-coords": y_coords,
        "times": times,
        "prediction-time": prediction_time
      },
      mode: "cors",
    })
    return response.text();
}
  
// let data = postData("http://10.150.237.54:3002/api/v1/linear").then((data) => {
//     console.log(data);
// });

// data = postData("http://10.150.237.54:3002/api/v1/polynomial").then((data) => {
//     console.log(data);
// });

// let text = postData("http://localhost:3002/");
// console.log(text);
  