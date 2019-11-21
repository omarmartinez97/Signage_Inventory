var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('GET /', function() {
    it('goes to home page', function(done) {
        request.get('/')
            .expect(200)
            .end(function(err, res) {
                expect(res.body).to.have.lengthOf(2);
                done(err);
            });
    });
});