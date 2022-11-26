var express = require('express');
const { render } = require('../app');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper = require('../helpers/product-helpers');
/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllProducts().then((products) => {
    console.log(products);
    res.render('admin/view-product', { admin: true, products });
  });


});

router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
})

router.post('/add-product', (req, res) => {
  console.log(req.files.Image);

  productHelpers.addProduct(req.body, (insertedId) => {
    let image = req.files.Image;
    console.log(insertedId);
      image.mv('./public/product-images/' + insertedId + '.jpg', (err, done) => {
        if (!err) {
          res.render("admin/add-product")
        }
        else
          console.log(err);

      })

  });
})

module.exports = router;
