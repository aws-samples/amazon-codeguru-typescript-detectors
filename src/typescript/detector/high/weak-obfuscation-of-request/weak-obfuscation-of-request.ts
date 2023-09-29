// {fact rule=weak-obfuscation-of-request@v1.0 defects=1}
var jwt = require("jsonwebtoken");
function weakObfuscationOfRequestNoncompliant() {
  // Noncompliant: secret is hardcoded.
  const payload = "sss";
  var secret = "secret";
  jwt.sign(payload, secret);
}
// {/fact}

// {fact rule=weak-obfuscation-of-request@v1.0 defects=0}
var jwt = require("jsonwebtoken");
var payload: number;
function weakObfuscationOfRequestCompliant() {
  // Compliant: secret is properly loaded from environment variables.
  var secret = process.env.JWT_TOKEN_SECRET;
  jwt.sign(payload, secret);
}

// {/fact}
