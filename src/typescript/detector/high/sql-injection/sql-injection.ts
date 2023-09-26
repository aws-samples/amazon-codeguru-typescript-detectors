// {fact rule=sql-injection@v1.0 defects=1}
var sql = require('mysql')
    var express = require('express')
    var app = express()

    var connection = sql.createConnection({
        host: 'localhost',
        user: 'myUserName',
        password: 'myPass',
        database: 'myDatabase'
    })

    function sqlInjectionNoncompliant() {
        app.get("/user/:id", (req: { params: { id: string } }, res: any) => {
            // Noncompliant: user input is not sanitized before use.
            var query = "SELECT * FROM Employees WHERE ID = " + req.params.id
            connection.query(query, (error: any, results: any, fields: any) => {
                if (error) throw error
            })
        })
    }
// {/fact}


// {fact rule=sql-injection@v1.0 defects=0}
var sql = require('mysql')
var express = require('express')
var app = express()

var connection = sql.createConnection({
    host: 'localhost',
    user: 'myUserName',
    password: 'myPass',
    database: 'myDatabase'
})

function sqlInjectionCompliant() {
    app.get("/user/:id", (req: { params: { id: any } }, res: any) => {
        // Compliant: user input is sanitized before use.
        var query = "SELECT * FROM Employees WHERE ID = " + connection.escape(req.params.id)
        connection.query(query, (error: any, results: any, fields: any) => {
            if (error) throw error
        })
    })
}

// {/fact}