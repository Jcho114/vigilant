// Replace 'https://api.example.com/data' with the actual API endpoint
const apiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

const headers = {
    'Content-Type': 'application/json',
    // Add any other headers as needed
};
  
const params = {
    latitude: 51.5072,
    longitude: -0.1276,
};

// Using fetch to make a GET request

const urlWithParams = new URL(apiUrl);
urlWithParams.search = new URLSearchParams(params).toString();

fetch(urlWithParams, {
    method: 'GET',
    headers: headers,
})
  .then(response => {
    // Check if the request was successful (status code 2xx)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the data from the response
    console.log('Data:', data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
