// {fact rule=cross-site-request-forgery@v1.0 defects=1}
var express = require("express");
var app = express();
function crossSiteRequestForgeryNoncompliant() {
  app.get(
    "/",
    (
      req: any,
      res: {
        cookie: (
          arg0: string,
          arg1: string,
          arg2: { sameSite: string; secure: boolean },
        ) => void;
        render: (arg0: string) => void;
      },
    ) => {
      // Noncompliant: `sameSite` is set to 'none'.
      res.cookie("cookieName", "cookieValue", {
        sameSite: "none",
        secure: true,
      });
      res.render("index.html");
    },
  );
}
// {/fact}

// {fact rule=cross-site-request-forgery@v1.0 defects=0}

var express = require("express");
var app = express();
function crossSiteRequestForgeryCompliant() {
  app.get(
    "/",
    (
      req: any,
      res: {
        cookie: (
          arg0: string,
          arg1: string,
          arg2: { sameSite: string; secure: boolean },
        ) => void;
        render: (arg0: string) => void;
      },
    ) => {
      // Compliant: `sameSite` is set to 'lax'.
      res.cookie("cookieName", "cookieValue", {
        sameSite: "lax",
        secure: true,
      });
      res.render("index.html");
    },
  );
}
// {/fact}
