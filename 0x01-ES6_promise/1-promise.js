// Using the prototype below, return a promise. The parameter is a boolean.
const getFullResponseFromAPI = (success) => new Promise((resolve, reject) => {
  if (success) {
    resolve({
      status: 200,
      body: 'Success',
    });
  } else {
    reject(Error('The fake API is not working currently'));
  }
});

export default getFullResponseFromAPI;
