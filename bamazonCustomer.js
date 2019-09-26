//Require MySqL & Inquirer packages - node npm intallation pages (use console.table) 
    var inquirer = require("inquirer");
    var mysql = require("mysql");
    var consoleTable = require("console.table");
        console.log("Hello! Welcome to bAmazon!");

//Connecting to MySql database
    var connection = mysql.createConnection({
        host: "LocalHost",
        port: 3306,
        user: "root",
        password: "root",
        database: "bAmazon_DB"
    });

    connection.connect(function(err){
        if (err) throw err;
        console.log("You are listening on " + connection.port);
    })

//Show MySQL Products table w/ 10 items - use console.log to show the table data

//Inquirer Prompt: generating automatic messages: A= "Which product would you like to purchase? Please input its 5 digit ID number. B= How many would you like?

    inquirer.prompt ([
        {
            type: "input",
            message: "Which product would you like? Please input the item's 5 digit ID number.",
            name: "itemID"
        },
        {
            type: "input",
            message: "How many would you like?",
            name: "itemAMT" 
        },
        {
            type: "confirm",
            message: "Would you like to purchase something else?",
            name: "confirm",
            default: true
        }
    ])
        .then(function(inquirerResponse){
            if (inquirerResponse.itemAMT >= itemTableAmt) {
                console.log("Thank you! Your order has been processed!" + inquirerResponse.confirm)
            }
            else {
                console.log("I'm sorry, that quantity is not available.")
            }
        })

// Compare user input to pre-established item's quantity in table (use  < > =  with if else statement? ) 

//if purchaseSuccessfull , subtract User order from pre-established quantity and) update MySQL db &  message 1: "Thank you ! Your order has been processed !"

// or else generate message 2: "I'm sorry, that quantity is not available" 

// after either scenario, message prompt "Would you like to purchase something else? Would you like to leave?" return to message A



//10.25 + 10.26 + 12.10


