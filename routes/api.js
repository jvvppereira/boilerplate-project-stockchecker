'use strict';

module.exports = function (app) { 

  const data = [
    {
      stock: "GOOG",
      price: 786.90,
      likes: 1
    },
    {
      stock: "MSFT",
      price: 62.30,
      likes: -1
    }
  ];

  app.route('/api/stock-prices/')
    .get(function (req, res){
      const { stock, like } = req.query;
      const isArray = Array.isArray(stock);
      const filterData = data.filter(item => {
        if (isArray) {
          return stock.includes(item.stock)
        } else {
          return item.stock == stock
        }
      }).map(item => {
        const copyItem = {...item};
        if (isArray) {
          copyItem.rel_likes = copyItem.likes;
          delete copyItem.likes;
        }
        return copyItem;
      }).map(item => {
        const copyItem = {...item};

        copyItem.price = Number(copyItem.price).toFixed(2);

        return copyItem;
      }).
      reverse();


      const stockData = isArray ? filterData : filterData[0];

      const response = { 
        stockData
      };

      res.json(response);
    });
};
