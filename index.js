//user facing terminal output logic

const { breedDataFetcher }  = require('./breedFetcher');

let breed = process.argv[2];

// The anoymous callback passed in below is same as this
// const callbackErrororDesc = function(error, desc) {
//   if (error) { //this is saying if error param exists (which means (error, null) in the CB in the breedfetcher) console.log the error
//     console.log(error);
//   } else { //this is saying if error param does not exists (which means (null, descripton) in the CB in breedfetcher) console.log the desc
//     console.log(desc);
//   }
// };

breedDataFetcher(breed, (error, desc) => {
  if (error) {
    console.log(error);
  } else {
    console.log(desc);
  }
});