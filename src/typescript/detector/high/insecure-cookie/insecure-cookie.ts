// {fact rule=insecure-cookie@v1.0 defects=1}
var cookieSession = require('cookie-session')
import express, { Express } from 'express'
var app :Express = express()
function insecureCookieNoncompliant() {
    let session = app.use(cookieSession({
        name: 'session',
        secret: "secret",
        // Noncompliant: setting `httpOnly` to false makes cookie insecure.
        httpOnly: false,
    }))
}
// {/fact}


// {fact rule=insecure-cookie@v1.0 defects=0}
var cookieSession = require('cookie-session')
import express, { Express } from 'express'
var app :Express = express()
function insecureCookieCompliant() {
    // Compliant: by default `httpOnly` is set to true and thus makes cookie secure.
    let session = app.use(cookieSession({
        name: 'session',
        secret: "secret",
    }))
}
// {/fact}