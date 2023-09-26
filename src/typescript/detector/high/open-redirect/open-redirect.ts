
// {fact rule=open-redirect@v1.0 defects=1}
var express = require('express')
    var app = express()

    function openRedirectNoncompliant() {
        app.get('/users/:profileUrl', function (req: { params: { profileUrl: any } }, res: { redirect: (arg0: any) => void }) {
            var url = req.params.profileUrl
            // Noncompliant: user input is used without sanitization.
            res.redirect(url)
        })
    }
// {/fact}


// {fact rule=open-redirect@v1.0 defects=0}
var express = require('express')
    var app = express()

    function openRedirectCompliant() {
        const safeurl = ['www.example.com']
        app.post('/users/:profileUrl', function (req: { params: { profileUrl: any } }, res: { redirect: (arg0: string) => any }) {
            var url = req.params.profileUrl
            if (safeurl.includes(url)) {
                // Compliant: user input is sanitized before use.
                return res.redirect(url)
            }
            return res.redirect('/')
        })
    }
// {/fact}