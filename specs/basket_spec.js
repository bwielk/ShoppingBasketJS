var is = require('assert');
var basket = require('../basket.js');
var product = require('../product.js');
var product1 = require('../product1.js');

describe('Basket', function() {
  
  it('should be empty', function(){
    is.equal(0, basket.items.length);
  });

  it('should be able to add products', function(){
    basket.add(product);
    basket.add(product);
    is.equal(2, basket.items.length);
  });

  it('should be able to remove products', function(){
    basket.remove(product);
    is.equal(1, basket.items.length);
  });
  
  it('it should calculate total', function(){
    reset();
    basket.add(product);
    basket.add(product1);
    basket.add(product1);
    is.equal(80, basket.total());
  });

  function reset(){
    basket.items = [];
  }

})