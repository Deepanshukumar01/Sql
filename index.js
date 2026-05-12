/*topic 1
use faker to generate fake data
use npm i @faker-js/faker for install package */
/*topic 2
ye command new terminal pe and sql vs code se access
/usr/local/mysql/bin/mysql -u root -p and than password new line mei 

and file run ek baad connection close ke liye
connection.end()

topic 3
sql query methode 1 by benchmark
methode 2 mysql package and node.js
methode 3 cli se new teminal query access
methode 4 using sql file than same cli terminal use database than write source filename.sql*/

const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express")
const app=express()
const port=8080
const path=require("path")

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'college',
  password: 'Deep@2005',
});

/* let query="SHOW TABLES"
try{
connection.query(query,(err,result)=>{
  if(err) throw err
  console.log(result)
})
}
catch(err){
  console.log(err)
}*/


/*  inserting new data
let q="insert into newstudent (id,username,email,password) values ?;"
let newstudentsss=[["343d","newuser1d","ddeep@gmail.com","dabc"],["343b","newuser1b","bdeep@gmail.com","babc"]]*/

// try{
// connection.query(q,[newstudentsss],(err,result)=>{
//   if(err) throw err
//   console.log(result)
// })
// }
// catch(err){
//   console.log(err)
// }

let getrandomuser=()=> {
 return [
   faker.string.uuid(),
   faker.internet.username(),
   faker.internet.email(),
   faker.internet.password(),
 ];
}


/*insert data in bulk by faker*/

// let q="insert into newstudent (id,username,email,password) values ?;"

// let data=[]
// for(let i=1;i<=100;i++){
//   data.push(getrandomuser())
// }

// try{
// connection.query(q,[data],(err,result)=>{
//   if(err) throw err
//   console.log(result)
// })
// }
// catch(err){
//   console.log(err)
// }
// connection.end()


app.get("/",(req,res)=>{
  let q="select count(*) from newstudent"
  try{
connection.query(q,(err,result)=>{
  if(err) throw err
  let count=result[0]["count(*)"]
  res.render("home.ejs",{count})
})
}
catch(err){
  console.log(err)
  res.send("some error in db")
}
})

app.get("/newstudent",(req,res)=>{
  let q="select * from newstudent"
  try{
connection.query(q,(err,result)=>{
  if(err) throw err
  res.render("newstudent.ejs",{result})
})
}
catch(err){
  console.log(err)
  res.send("some error in db")
}
})

app.listen(port,()=>{
  console.log(`${port} is working`)
})

// let getrandomuser=()=> {
//  return {
//    userId: faker.string.uuid(),
//    username: faker.internet.username(),
//    email: faker.internet.email(),
//    password: faker.internet.password(),
//  };
// }
// console.log(getrandomuser())
