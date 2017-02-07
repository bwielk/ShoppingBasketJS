var product = require('./product');

var Basket = {

  items: new Array,

  add: function(item){
    this.items.push(item);
  },

  remove: function(item){
    this.items.pop(item);
  },

  total: function(){
    total = 0;
    for(var item of this.items){
      total += item.price;
    }
    return total;
  }

}

module.exports = Basket;
