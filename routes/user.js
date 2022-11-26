var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
/* GET home page. */
router.get('/', function (req, res, next) {

  let products=[
    {
      name:"Iphone 14 pro Max",
      category:"Mobile",
      description:"This is a good phone",
      image:"https://d2xamzlzrdbdbn.cloudfront.net/products/be013621-8b86-466b-be1a-ffa018b59ed922090603_416x416.jpg"
    },

    {
      name:"OnePlus 10 pro",
      category:"Mobile",
      description:"This is a good phone",
      image:"https://m.media-amazon.com/images/I/61mIUCd-37L._SX679_.jpg"
    },

    {
      name:"Samsung S22 ultra",
      category:"Mobile",
      description:"This is a good phone",
      image:"https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"
    },

    {
      name:"Vivo X80 pro",
      category:"Mobile",
      description:"This is a good phone",
      image:"https://www.reliancedigital.in/medias/Vivo-X80-Pro-Smartphones-492850418-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODA1N3xpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDYxLzk4ODIxNzc3MzI2MzguanBnfDljMTAxNzUyNTE0NzMzNTZmNzhmMjJlYmFmMDBlYTc5ODcyMDYxMmE2ZWYxODYxZjUwNjdmZTQxYzczMTFlMTU"
    }
  ]

  res.render('index', {products,admin:false});
});

router.post('/', function (req, res, next) {
  console.log(req.body)
  res.send('got it')
});
module.exports = router;
