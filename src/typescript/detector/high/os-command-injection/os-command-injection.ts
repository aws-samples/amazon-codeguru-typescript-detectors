
// {fact rule=os-command-injection@v1.0 defects=1}
var express = require('express')
    var app = express()
    var execa = require('execa')

    function osCommandInjectionNoncompliant() {
        app.get('/user/:id', async function (req: { params: { id: string } }, res: any) {
            // Noncompliant: `execa.command` takes argument as a string hence it can inject unwanted characters.
            var output = await execa.command("ls -t " + req.params.id)
        })
    }
// {/fact}


// {fact rule=os-command-injection@v1.0 defects=0}
var express = require('express')
    var app = express()
    var execa = require('execa')

    function osCommandInjectionCompliant() {
        app.get('/user/:id', async function (req: { params: { id: any } }, res: any) {
            // Compliant: command arguments for `execa` are defined as elements of array to prevent injection.
            var output = await execa("ls", ["-t", req.params.id])
        })
    }
// {/fact}