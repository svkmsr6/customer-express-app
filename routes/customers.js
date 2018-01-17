const express = require('express');
const customerModel = require('../models/customer.model')
var router = express.Router();

router.get('/customers',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type','application/json');
    customerModel.find(function(err,log){
        if(err)
         throw new Error(err);

	    console.log("Total Records Found:"+log.length);
        res.send(JSON.stringify(log));
  });
})

router.get('/customers/:name',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type','application/json');
    customerModel.find({'name':req.params.name}).then(
        data => {
            console.log("Total Records Found:"+data.length);
            res.send(JSON.stringify(data));
        },
        err => {
           res.send(err);
        }
    );
})

router.put('/customers/:name',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type','application/json');
    customerModel.findOneAndUpdate({'name':req.params.name},{
        name: req.body.name,
        city: req.body.city})
        .then(
        data => {
            res.send(data);
        },
        err => {
           res.send(err);
        }
    );
})

router.post('/customers',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type','application/json');
    var customer = new customerModel({
        name:req.body.name,
        city:req.body.city,
        status:req.body.status
    });

    customer.save().then(
        data => {
            res.send(data);
        },
        err => {
            res.send(err);
        }
    );
})

module.exports = router;
