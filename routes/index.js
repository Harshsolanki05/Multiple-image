var express = require('express');
var router = express.Router();
const multer = require('multer');
var img = require('../controller/imagecontroller')

//------------------Image------------------
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'public/images')
  },  
  filename: function (req, file, cb) {
    cb(null,file.originalname) 
  }
})
var upload = multer({ storage: storage })

router.post('/insert',upload.array('image', 12),img.insert) 
router.get('/img-data',img.getdata) 



module.exports = router;
