var is = require('assert');
var product1 = require('../product1');

describe('Product1', function(){

  it('Should have name', function(){
    is.equal('yyy', product1.name)
  });

  it('Should have price', function(){
    is.equal(30, product1.price)
  });
})