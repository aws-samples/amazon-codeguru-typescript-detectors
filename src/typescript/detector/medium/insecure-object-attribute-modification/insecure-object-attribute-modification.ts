// {fact rule=insecur-object-attribute-modification@v1.0 defects=1}
var express = require("express");
var app = express();
function insecureObjectAttributeModificationNoncompliant() {
  app.get(
    "www.example.com",
    (
      req: {
        params: { id: any };
        session: { user: { [x: string]: any } };
        body: { [x: string]: any };
      },
      res: any,
    ) => {
      var userId = req.params.id;
      // Noncompliant: external input used as object property.
      req.session.user[userId] = req.body["userDetails"];
    },
  );
}
// {/fact}

// {fact rule=insecur-object-attribute-modification@v1.0 defects=0}
var express = require("express");
var app = express();
function insecureObjectAttributeModificationCompliant() {
  app.get(
    "www.example.com",
    (
      req: {
        params: { id: any };
        session: { user: { [x: string]: any } };
        body: { [x: string]: any };
      },
      res: any,
    ) => {
      var userId = req.params.id;
      // Compliant: checks the type of userId as string.
      if (typeof userId === "string") {
        req.session.user[userId] = req.body["userDetails"];
      }
    },
  );
}
// {/fact}
