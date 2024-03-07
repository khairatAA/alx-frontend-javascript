// Using the prototype below, return a promise. The parameter is a boolean.
const handleResponseFromAPI = (promise) => new Promise((resolve, reject) => {
  if (promise) {
    resolve({
      status: 200,
      body: 'Success',
    });
  } else {
    reject(Error());
  }
});

handleResponseFromAPI(true)
  .then(console.log('Got a response from the API'));

export default handleResponseFromAPI;
