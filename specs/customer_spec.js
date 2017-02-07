var is = require('assert');
var customer = require('../customer');

describe('Customer', function(){

  it("should have a discount card", function(){
    is.equal(true, customer.hasCard);
  });

  it("should be able to set card", function(){
    customer.setCard();
    is.equal(false, customer.hasCard);
  });

})