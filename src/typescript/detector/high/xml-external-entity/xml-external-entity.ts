
// {fact rule=xml-external-entity@v1.0 defects=1}
var libxmljs = require("libxmljs");
    var fs = require('fs');
    function xmlExternalEntityNoncompliant() {
        const xml = fs.readFileSync("foo.xml");
        // Noncompliant: sets `noent` to true which enables the parsing of external entities.
        const xmlDoc = libxmljs.parseXml(xml, { noent: true, noblanks: true });
    }
// {/fact}


// {fact rule=xml-external-entity@v1.0 defects=0}

var express = require('express')
    var app = express()
    var request = require('request')

    function serverSideRequestForgeryCompliant() {
        app.get('/data/img', (req: any, res: any) => {
            // Compliant: url used to make a request is not user provided.
            var url = 'https://example.com'
            request.get(url)
        })
    }
// {/fact}