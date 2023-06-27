var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var userModel = require('../models/user');
const bcrypt = require('bycrypt');
const jwt = require('jsonwebtoken'); 

router.post('/login', (req,res,next)=>{
    userModel.find({username:req.body.username}) // pr ye btao tumne email ku dala h? username hai vo to
    .exec()
    .then(user=>{
        if(user.length<1)
        {
            return res.status(401).json({
                msg:'user does not exist'
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(!result)
            {
                return res.status(401).json({
                    msg:'Password fail'
                })
            }
            if(result)
            { 
                const token = jwt.sign({
                    username:user[0].username,
                   // userType:user[0].userType,
                    email:user[0].email,
                  //  phone:user[0].phone

                },
                'this is dummy text',
                {
                    expiresIn:"24h"
             });
             res.status(200).json({
                username:user[0].username,
                email:user[0].email,
                token:token
             })
            }
        })
    }) 
})