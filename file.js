/*//creating file in a folder
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'sakshi');
//for(i=0; i<5; i++){
 //   fs.writeFileSync(dirPath + "/hello"+i+".txt", "this is me")}

 fs.readdir(dirPath,(err, files)=>
 {
  console.log(files)
 })*/




 //CRUD with file system
 //create file
 const fs = require('fs')
 //fs.writeFileSync('hey.txt','what is this');
 const path = require('path');
 const dirPath = path.join(__dirname,'crud');
 const filePath = `${dirPath}/apple.txt`;
 fs.writeFileSync(filePath,'this is me sakshi Bhandari')

//read file
/*fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item)
})*/

//update file

/*fs.appendFile(filePath,'and I am a sweet girl',(err)=>{
    if(!err) 
    console.log("file is updated")
})*/

//delete file

fs.unlinkSync(`${dirPath}/apple.txt`);
console.log("file is deleted")