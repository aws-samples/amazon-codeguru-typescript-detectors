// {fact rule=session-fixation@v1.0 defects=1}
var express = require("express");
var passport = require("passport");
var app = express();
function sessionFixationNoncompliant() {
  app.post(
    "/somepage",
    passport.authenticate("local", { failureRedirect: "/somepage" }),
    function (req: any, res: { redirect: (arg0: string) => void }) {
      // Noncompliant: session.regenerate is absent.
      res.redirect("/");
    },
  );
}
// {/fact}

// {fact rule=session-fixation@v1.0 defects=0}
var express = require("express");
var passport = require("passport");
var app = express();
function sessionFixationCompliant() {
  app.post(
    "/somepage",
    passport.authenticate("local", { failureRedirect: "/somepage" }),
    function (
      req: { session: { regenerate: (arg0: (err: any) => void) => void } },
      res: { redirect: (arg0: string) => void },
    ) {
      // Compliant: session.regenerate is used
      req.session.regenerate((err: any) => {});
      res.redirect("/404");
    },
  );
}
// {/fact}
