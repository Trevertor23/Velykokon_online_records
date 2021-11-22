const mysql = require("mysql2");
const express = require('express');
const urlencodedParser = express.urlencoded({extended: false});

//db connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "trevertor",
    database: "records",
    password: "321654654321"
  });
  connection.connect(function(err){
    if (err) {
      return console.error("!!!!!!!!!!!!!!!!!!!!!!!!!!\n"+"Error: " + err.message+"\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
    else{
      console.log("---------------------------------");  
      console.log("| MySQL connection established! |");
      console.log("---------------------------------");
    }
 });
////db connection

//start of filling...


let temporary = [];
 let records = [];
function dateToFormat(today){
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  return (yyyy + '/' + mm + '/' + dd);
}

connection.query("SELECT * FROM records_list;",
function(err, results, fields) {
    temporary = results;
    for (let i=0; i<temporary.length; i++)
    {
        records.push({id:temporary[i].id,
                         spec:temporary[i].spec,
                         date:temporary[i].rec_date,
                         time:temporary[i].rec_time,
                         isBusy:temporary[i].isBusy,
                         idOfUser:temporary[i].idOfUser});
        records[i].date = dateToFormat(records[i].date);
        if(records[i].isBusy == 0)
          records[i].isBusy = false;
        else 
          records[i].isBusy = true;
    }
});

module.exports = function(app){
    app.get('/', (req, res) => {
        res.json(records);
      })
      
    //   app.get('/', (req, res) => {
    //     res.send(students);
    //   })
    app.post("/add", urlencodedParser, function (request, response) {
        if(!request.body) return response.sendStatus(400);
        console.log(request.body);
        //response.send(`${request.body}`);
        response.send(request.body);
    });
}