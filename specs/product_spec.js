var is = require('assert');
var product = require('../product');

describe('Product', function(){

  it('Should have name', function(){
    is.equal('xxx', product.name)
  });

  it('Should have price', function(){
    is.equal(20, product.price)
  });
})