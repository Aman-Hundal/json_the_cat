const request = require('request');

const breedFetcher = function(commandLineArg) {
  let breedArg = commandLineArg[2];
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedArg}`, ((error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("ERROR. Breed does not exist");
      return;
    }
    console.log(data[0].description);
    // console.log(typeof data);
    // console.log(data)
  }));
};

breedFetcher(process.argv);