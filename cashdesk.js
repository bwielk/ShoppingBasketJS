var basket = require('./basket');
var product = require('./product');
var customer = require('./customer');
var discount = require('./discount');
var loyalty_discount = require('./loyalty_discount');

var Cashdesk = {
  giveDiscount: function(basket, discount){
    if(basket.total() > 20.00){
      return basket.total() - basket.total()*discount.value;
    }
    else{
      return "You are not entitled for the discount";
    }
  },

  loyalDiscount: function(basket, discount, customer){
    if(customer.hasCard){
      return basket.total() - basket.total()*loyalty_discount.value;
    }
  },

  bogof: function(basket){
    totalToPayFor = 0;
    for(i = 0; i < Math.floor(basket.items.length/2); i++){
      totalToPayFor += basket.items[i].price;
    }
    return basket.total() - totalToPayFor;
  }
}

module.exports = Cashdesk;