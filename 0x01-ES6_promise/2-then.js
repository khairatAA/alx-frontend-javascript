// Using the prototype below, return a promise. The parameter is a boolean.
const handleResponseFromAPI = (promise) => new Promise((resolve, reject) => {
  try {
    if (promise) {
      console.log('Got a response from the API');
      return resolve({
        status: 200,
        body: 'Success',
      });
    }
    throw new Error();
  } catch (err) {
    return reject(err);
  }
});

export default handleResponseFromAPI;
