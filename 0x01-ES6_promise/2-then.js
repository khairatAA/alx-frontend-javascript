// Using the prototype below, return a promise. The parameter is a boolean.
const handleResponseFromAPI = (promise) => promise
  .then(() => (
    {
      status: 200,
      body: 'Success',
    }
  ))
  .catch(() => (Error()))
  .finally(() => { console.log('Got a response from the API'); });

export default handleResponseFromAPI;
