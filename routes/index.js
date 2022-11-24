var express = require('express');
var router = express.Router();
const  auth = require('./auth.route');
const createError = require('http-errors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello from Express' });
});

router.use('/auth',auth);

router.use( async (req,res,next)=>{
  next(createError.NotFound('Route not Found'))
});

router.use( async ( err,req,res,next)=>{
  res.status(err.status || 500).json({
    status:false,
    message: err.message
  })
});

module.exports = router;
