var is = require('assert');
var cashdesk = require('../cashdesk');
var customer = require('../customer');
var product = require('../product');
var product1 = require('../product1');
var basket = require('../basket');
var discount = require('../discount');
var discount1 = require('../loyalty_discount');

describe('Cashdesk', function(){

  it('should give a 10% discount on transactions > £20', function(){
    basket.items = [];
    basket.add(product);
    basket.add(product1);
    basket.add(product);
    is.equal(63, cashdesk.giveDiscount(basket, discount));
  });

  it('shouldnt give any discount if transaction < £20', function(){
    basket.items = [];
    basket.add(product);
    is.equal("You are not entitled for the discount", cashdesk.giveDiscount(basket, discount));
  });

  it('should give a 5% discount on transactions if customer has a loyalty card', function(){
    basket.items = [];
    basket.add(product);
    basket.add(product1);
    basket.add(product);
    is.equal(66.50, cashdesk.loyalDiscount(basket, discount, customer));
  });

  it('should give bogof discount', function(){
    basket.items = [];
    basket.add(product);
    basket.add(product);
    basket.add(product);
    is.equal(40, cashdesk.bogof(basket));
  });

  it('should give bogof discount part 2', function(){
    basket.items = [];
    basket.add(product1);
    basket.add(product1);
    basket.add(product1);
    is.equal(60, cashdesk.bogof(basket));
  });

})