// Using the prototype below, return a promise. The parameter is a boolean.
const handleResponseFromAPI = (promise) => new Promise((resolve, reject) => {
  if (promise) {
    console.log('Got a response from the API');
    return resolve({
      status: 200,
      body: 'Success',
    });
  }
  return reject(Error());
});

export default handleResponseFromAPI;
