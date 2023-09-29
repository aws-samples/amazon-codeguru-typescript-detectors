// {fact rule=non-literal-regular-expression@v1.0 defects=1}
var express = require("express");
var app = express();
function nonLiteralRegularExpressionNoncompliant() {
  app.get("www.example.com", (req: { body: { id: any } }, res: any) => {
    var re = new RegExp("ab+c");
    // Noncompliant: user-controlled data passes into `test` for regex patterns.
    var test = re.test(req.body.id);
  });
}
// {/fact}

// {fact rule=non-literal-regular-expression@v1.0 defects=0}

var express = require("express");
var escapeStringRegexp = require("escape-string-regexp");
var app = express();
function nonLiteralRegularExpressionCompliant() {
  app.get("www.example.com", (req: { body: { id: any } }, res: any) => {
    var re = new RegExp("ab+c");
    // Compliant: sanitized user-controlled data passes into `test` for regex patterns.
    var test = re.test(escapeStringRegexp(req.body.id));
  });
}
// {/fact}
