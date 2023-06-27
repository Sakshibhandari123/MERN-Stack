const express = require("express")
const mongoose = require("mongoose")
var cors = require('cors')
const app = express()
const port = 4000
var userModel = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 


// Importing modules
const PDFDocument = require('pdfkit')
// import PDFDocument from 'pdfkit'
const fs = require('fs')
// import fs from 'fs'




const StudentRegister = require('./controllers/user')
app.use(cors())
app.use(express.json())


// from './api/user' import router from './api/user'
// const router = require('./api/user')
// import router from './api/user'
const DB = 'mongodb+srv://sakshi:sakshi123@cluster0.bwbqyvu.mongodb.net/mongodb?retryWrites=true&w=majority'
// let DB="mongodb+srv://sakshi:sakshi123@cluster0.bwbqyvu.mongodb.net/?retryWrites=true&w=majority"
// const uri = 'mongodb+srv://sakshi:sakshi123@cluster0.tmejfcw.mongodb.net/'+'users?retryWrites=true&w=majority';

//db connection
//mongoose.connect("mongodb://localhost:27017/express-mongo-app",{
    mongoose.connect(DB)
.then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("Oh no error in db connection....",err)
})


app.get("/", (req,res)=>{
    res.send("hello")
})


//Api for signup
app.post("/signup", function(req,res,next){

    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
    var confirmPassword=req.body.confirmPassword;
    if(password !== confirmPassword){
        res.json({
            message:"Password is incorrect!",
        });
    }else{

        bcrypt.hash(password,10,function(err,hash){

            if(err){
                return res.json({
                    message:"Something went Wrong! Try Again, hash not working",
                    error:err
                });
            }
            else{
                var userDetails = new userModel({
                    _id:mongoose.Types.ObjectId(),
                    username:username,
                    email:email,
                    password:hash
                });
                userDetails.save()

                .then(doc=>{
                    res.status(201).json({
                        message:"User Registered Successfully",
                        result:doc
                    });
                })
                .catch(err=>{
                    res.json(err);
                });
            }
        });
    }
});

const student = require("./models/student")

//Api for sign in.
app.post('/login', (req,res,next)=>{
    userModel.find({username:req.body.username})
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



// let collection = await db.collection("posts");
app.get('/getstudent', async(req,res)=>{
    let results = await student.find({})
      
      
    
    res.send(results).status(200);

})


app.get("/student/:rollno", async (req, res) => {
    // let collection = await db.collection("posts");
    let query = {RollNumber: req.params.rollno};
    console.log('query rollno',query)
    let result = await student.findOne(query);
  
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
  });



  // Update the post with a new comment
app.patch("/student/:rollno", async (req, res) => {
    let query = {RollNumber: req.params.rollno};

    var newvalues = { $set:{
        "FirstName":req.body.FirstName,
        "LastName" :req.body.LastName,
        "RollNumber":req.body.RollNumber,
        "MobileNumber":req.body.MobileNumber,
        "City":req.body.City
      } };

    // let collection = await db.collection("posts");
    let result = await student.updateOne(query, newvalues);
  
    res.send(result).status(200);
  });


  app.delete("/student/:rollno", async (req, res) => {
    let query = {RollNumber: req.params.rollno};
  
    let result = await student.deleteOne(query);
  
    res.send(result).status(200);
  });




app.post('/createstudent',StudentRegister.StudnetRegister)

app.get("/pdf/:rollno", async (req, res) => {
    // let collection = await db.collection("posts");
    let query = {RollNumber: req.params.rollno};
    console.log('query rollno',query)
    let result = await student.findOne(query);
  
    if (!result) res.send("Not found").status(404);
    else{
        
        console.log('result',result)
        // res.send(result).status)(200)
        // Create a document
        res.setHeader('Content-type', 'application/pdf');
            const doc = new PDFDocument();
            
            // Saving the pdf file in root directory.
            doc.pipe(fs.createWriteStream('example.pdf'));
            
            // Adding functionality
            doc
            .fontSize(13)
            .text('SARASWATI VIDYA MANDIR SRINAGAR GARHWAL UTTARAKHAND (Batch 2022-23) Transfer Certificate'
           
           

        , 200, 100);
            
            // Adding an image in the pdf.
            
            doc.image('vidya.png', {
                fit: [300, 300],
                align: 'center',
                valign: 'center'
            });
            
            doc
            .fontSize(15)
            .text(`Student FirstName: ${result.FirstName}`, 200, 500);

            doc
            .fontSize(15)
            .text(`Student LastName: ${result.LastName}`, 200, 550);

            doc
            .fontSize(15)
            .text(`Student RollNo: ${result.RollNumber}`, 200, 600);


            doc
            .fontSize(15)
            .text(`Student MobileNO: ${result.MobileNumber}`, 200, 650);

            doc
            .fontSize(15)
            .text(`Student City: ${result.City}`, 200, 700);


            // doc
            // .fontSize(15)
            // .text(' 12 or 13 year school system: 12 year System Last day school was attended in: December 17, 2023 The Academic Year Current Grade: (if leaving during the academic year) OR Currently in year 2022 Passed and Promoted to (if completed the academic year.) ',200,750);

            
            // doc
            // .fontSize(15)
            // .text(' 12 or 13 year school system: 12 year System',200,750);

            
            // doc
            // .fontSize(15)
            // .text(' Last day school was attended in: December 17, 2023 The Academic Year',200,770);


            
            // doc
            // .fontSize(15)
            // .text(' Current Grade: (if leaving during the academic year)',200,790);
                
            // doc
            // .fontSize(15)
            // .text('OR Currently in year 2022',200,810);

                
            // doc
            // .fontSize(15)
            // .text(' Passed and Promoted to (if completed the academic year.)',200,830);

                
            // doc
            // .fontSize(15)
            // .text(' Signature of Priciple:',200,850);



            

            
            
            
            // Apply some transforms and render an SVG path with the 
            // 'even-odd' fill rule
            // doc
            // .scale(0.6)
            // .translate(470, -380)
            // .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
            // .fill('red', 'even-odd')
            // .restore();
            
            // Add some text with annotations
            // doc
            // .addPage()
            // .fillColor('blue')
            // .text('The link for GeeksforGeeks website', 100, 100)
                
            // .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');
            

            // Finalize PDF file
            doc.end();

            // res.send(doc).status(200)
            // let filePath = path.join(certificate, "youe-file.whatever");

            res.download('example.pdf');
    };
  });



//define routes middleware
// app.use("/api",require("./routes/user")) 

// "username":"aditi",
//       "email":"aditi991@gmail.com",
//       "password":"12345678",
//       "confirmPassword":"12345678"

app.listen(port, ()=> console.log("Serever is running on port"+ port))
 



