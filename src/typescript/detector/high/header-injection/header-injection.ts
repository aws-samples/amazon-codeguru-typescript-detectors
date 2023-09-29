// {fact rule=header-injection@v1.0 defects=1}
var express = require("express");
var app = express();
function headerInjectionNoncompliant() {
  app.get(
    "www.example.com",
    function (
      req: { query: { type: any } },
      res: { setHeader: (arg0: string, arg1: any) => void },
    ) {
      // Noncompliant: using untrusted user-input to set response headers.
      res.setHeader("Content-Type", req.query.type);
    },
  );
}
// {/fact}

// {fact rule=header-injection@v1.0 defects=0}
var express = require("express");
var app = express();
function headerInjectionCompliant() {
  app.get(
    "www.example.com",
    function (
      req: any,
      res: { setHeader: (arg0: string, arg1: string) => void },
    ) {
      // Compliant: using hardcoded string value to set response headers.
      res.setHeader("Content-Type", "text/html");
    },
  );
}

// {/fact}
