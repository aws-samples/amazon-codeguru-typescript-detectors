// {fact rule=insecure-temporary-file-or-directory@v1.0 defects=1}
var fs = require("fs");

function insecureTempFileNoncompliant() {
  // Noncompliant: the global directory path is given for opening a file or creating a file which can be vulnerable to injection attacks.
  var tmp_file = "/tmp/f";
  fs.readFile(tmp_file, "utf8", function (err: any, data: any) {
    // ...
  });
}
//{/fact}

// {fact rule=insecure-temporary-file-or-directory@v1.0 defects=0}
var fs = require("fs");
var tmp = require("tmp");

function insecureTempFileCompliant() {
  // Compliant: tmp library to securely create or read temporary files.
  var tmp_obj = tmp.fileSync();
  fs.readFile(tmp_obj, "utf8");
}
//{/fact}
