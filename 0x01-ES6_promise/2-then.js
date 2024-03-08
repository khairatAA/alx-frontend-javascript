// Using the prototype below, return a promise. The parameter is a boolean.
const handleResponseFromAPI = (promise) => promise
  .then(() => (
    {
      status: 200,
      body: 'Success',
    }
  ), console.log('Got a response from the API'))
  .catch(() => (Error()));

export default handleResponseFromAPI;
