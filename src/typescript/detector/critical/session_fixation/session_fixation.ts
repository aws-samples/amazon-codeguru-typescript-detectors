// {fact rule=session-fixation@v1.0 defects=1}
import express, { Express, Request, Response } from 'express'
import passport from 'passport'
var app :Express = express()
function sessionFixationNoncompliant() {
  app.post('/somepage',
      passport.authenticate('local', { failureRedirect: '/somepage' }),
      function(req: Request, res: Response) {
        // Noncompliant: session.regenerate is absent.
        res.redirect('/')
      })
}
// {/fact}


// {fact rule=session-fixation@v1.0 defects=0}
import express, { Express, Request, Response } from 'express'
import passport from 'passport'
var app :Express = express()
function sessionFixationCompliant() {
  app.post('/somepage',
      passport.authenticate('local', { failureRedirect: '/somepage' }),
      function(req: Request, res: Response) {
        // Compliant: session.regenerate is used
        req.session.regenerate((err: any) => {
        })
        res.redirect('/404')
      })
}
// {/fact}