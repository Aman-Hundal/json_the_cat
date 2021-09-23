const request = require('request');

const breedDataFetcher = function(breedName, callbackToReturnData) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, ((error, response, body) => {
    if (error) {
      callbackToReturnData(error, null); // we predertmined that our call back will take in two params and check to see if one of these params exist to excute the info or not (via console log). CB in index will read this as (error, null there if error met)
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callbackToReturnData("ERROR. Breed does not exist", null); //callback in index will read this as error,null. Therefore if(error) met
      return;
    }
    callbackToReturnData(null, (data[0].description)); //callback in index will read this as (null, desc). Therefore if(error) not met and else done.
  }));
};

module.exports = {
  breedDataFetcher,
};


// CALL BACK RULE WE MADE FOR NULL OR ERROR = IMPORTANT
//This function should call the callback with either an error if there's a error or null if there isn't, for the first argument.