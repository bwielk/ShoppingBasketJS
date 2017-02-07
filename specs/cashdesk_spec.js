var is = require('assert');
var customer = require('../cashdesk');
var product = require('../product');
var product1 = require('../product1');
var basket = require('../basket');
var discount = require('../discount');
var discount1 = require('../loyalty_discount');

describe('Cashdesk', function(){

  it('should give a 10% discount on transactions > £20', function(){
    basket.add(product);
    basket.add(product1);
    basket.add(product);
    is.equal(63, cashdesk.giveDiscount(basket, discount));
  })
})