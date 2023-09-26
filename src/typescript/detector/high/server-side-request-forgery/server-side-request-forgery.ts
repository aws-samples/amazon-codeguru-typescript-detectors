
// {fact rule=server-side-request-forgery@v1.0 defects=1}
var express = require('express')
    var app = express()
    var request = require('request')

    function serverSideRequestForgeryNoncompliant() {
        app.get('/data/img', (req: { body: { imageUrl: any } }, res: any) => {
            var url = req.body.imageUrl
            // Noncompliant: user provided url is used to make a request.
            request.get(url)
        })
    }
// {/fact}


// {fact rule=server-side-request-forgery@v1.0 defects=0}

var libxmljs = require("libxmljs");
    var fs = require('fs');
    function xmlExternalEntityCompliant() {
        const xml = fs.readFileSync("foo.xml");
        // Compliant: parsing of external entities is disabled by default.
        const xmlDoc = libxmljs.parseXml(xml, { noblanks: true });
    }
// {/fact}