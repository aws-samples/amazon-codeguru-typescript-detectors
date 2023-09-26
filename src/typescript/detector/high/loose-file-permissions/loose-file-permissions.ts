
// {fact rule=loose-file-permissions@v1.0 defects=1}
var fs = require('fs')
    function looseFilePermissionsNoncompliant() {
        // Noncompliant: read permissions assigned to others.
        fs.promises.chmod("/path", 0o774).then((r: any) => { })
    }
// {/fact}


// {fact rule=loose-file-permissions@v1.0 defects=0}
var fs = require('fs');
    function looseFilePermissionsCompliant() {
        // Compliant: read, write and execute permissions assigned to owner and no permission assigned to others.
        fs.promises.chmod("/path", 0o770).then((r: any) => {})
    }

// {/fact}