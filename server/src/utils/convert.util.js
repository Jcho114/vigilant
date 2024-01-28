function convertDateToMinutes(date) {
    var date_object = new Date(date);
    var time = (date_object.getTime() / 1000) / 60;
    
    // console.log(time);
    return time;
}

convertDateToMinutes("2024-01-23 19:56:00.000000")
convertDateToMinutes("2024-01-20 19:56:00.000000")
convertDateToMinutes("2024-01-13 19:56:00.000000")
convertDateToMinutes("2023-09-25 23:21:21.23154")
convertDateToMinutes("2023-01-20 23:21:21.23154")