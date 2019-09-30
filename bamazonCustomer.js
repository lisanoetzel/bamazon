//Require MySqL & Inquirer packages - node npm intallation pages (use console.table) 
    var inquirer = require("inquirer");
    var mysql = require("mysql");
    require("console.table");
        console.log("Hello! Welcome to bAmazon!");

//Connecting to MySql database
    var connection = mysql.createConnection({
        host: "LocalHost",
        port: 3306,
        user: "root",
        password: "@Fareilwebdesigner001",
        database: "bamazon_db"
    });

    connection.connect(function(err){
        if (err) throw err;
        //console.log not working - not showing my connection ID
        // console.log("You are listening on " + connection.threadId);
        //calling the StartDisplayFUnction
        startDisplayProducts();
    })


//Inquirer Prompt: generating automatic messages: A= "Which product would you like to purchase? Please input its 5 digit ID number. B= How many would you like?
    function startDisplayProducts (){
        
    //Show MySQL Products table w/ 10 items - use console.table to show the table data ~ This is the R of CRUD
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;  
        // console.log(res);
        console.table(res);
        runQuestions();
    })

    } 
    function runQuestions(){
        inquirer.prompt ([
        {
            type: "number",
            message: "Which product would you like? Please input the item's 5 digit ID number.",
            name: "itemID"
        },
        {
            type: "number",
            message: "How many would you like?",
            name: "itemAMT" 
        },
        // {
        //     type: "confirm",
        //     message: "Would you like to purchase something else?",
        //     name: "confirm",
        //     default: true
        // }
    ])
        .then(function(inquirerResponse){

            connection.query("SELECT * FROM products WHERE ?", [{item_id: inquirerResponse.itemID}], function(err, res){
                if (err) throw err;
                console.log(res[0].stock_quantity);
                if (inquirerResponse.itemAMT <= res[0].stock_quantity) {
                    console.log("Success");
                    // Updating the SQL database 
                                connection.query("UPDATE products SET ? WHERE ?",
                                [
                                    {
                                        stock_quantity: res[0].stock_quantity - inquirerResponse.itemAMT
                                    },
                                    {
                                        item_id: inquirerResponse.itemID
                                    }
                                ], function(err,res){
                                        console.log(res);
                                    
                                }
                                )}
                else {
                    console.log("Failure - There are only " + res[0].stock_quantity + " available");
                    }
                    
                // runQuestions(); 
                // connection.end();
                // console.log(typeof inquirerResponse.itemAMT);
                // connection.end();
            })
         
        })
    }
    

// // Compare user input to pre-established item's quantity in table (use  < > =  with if else statement? ) 

// //if purchaseSuccessfull , subtract User order from pre-established quantity and) update MySQL db &  message 1: "Thank you ! Your order has been processed !"

// // or else generate message 2: "I'm sorry, that quantity is not available" 

// // after either scenario, message prompt "Would you like to purchase something else? Would you like to leave?" return to message A



// //10.25 + 10.26 + 12.10


  
           