const { breedDataFetcher } = require('../breedFetcher');
const { assert } = require('chai');

describe('#breedDataFetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    breedDataFetcher('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('should return error from callback if breed does not exist', () => {
    breedDataFetcher("FAKEBREED", (err, desc) => {
      assert.equal(err);
    });
  });
  it('should return description of undefined error message and not error from callback if breed does not exist', () => {
    assert.equal(breedDataFetcher("FAKEBREED", (error, desc) => {
      if (error) {
        console.log(error);
      } else {
        console.log(desc);
      }
    }), undefined);
  });
});