var is = require('assert');
var customer = require('../customer');

describe('Customer', function(){

  it("should have a discount card", function(){
    is.equal(true, customer.hasCard);
  });

})