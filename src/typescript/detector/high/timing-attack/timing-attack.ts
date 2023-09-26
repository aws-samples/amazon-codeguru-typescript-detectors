
// {fact rule=timing-attack@v1.0 defects=1}
var express = require('express')
    var app = express()
    const password = "myPass"
    function timingAttackNoncompliant() {
        app.get('/user/login', function (req: any, res: any) {
            // Noncompliant: '===' operator is used with sensitive data field.
            if (password === "myPass") {
               // logIn()
            }
        })
    }
// {/fact}


// {fact rule=timing-attack@v1.0 defects=0}
var express = require('express')
var app = express()
var compare = require('secure-compare')
function timingAttackCompliant() {
    app.get('/user/login', function (req: any, res: any) {
        // Compliant: sensitive data field is compared using 'secure-compare'.
        if (compare(password, "myPass")) {
            //
        }
    })
}
// {/fact}