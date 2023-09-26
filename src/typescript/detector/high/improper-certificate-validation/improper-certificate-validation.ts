
// {fact rule=improper-certificate-validation@v1.0 defects=1}
var tls = require("tls")
var fs = require("fs")

function improperCertificateValidationNoncompliant() {
    var options = {
        host: 'encrypted.example.com',
        // Noncompliant: rejectUnauthorized is set to 'false'.
        rejectUnauthorized: false
    }

    tls.createServer(options, (req: any, res: { writeHead: (arg0: number) => void; end: () => void }) => {
        res.writeHead(200)
        res.end()
    }).listen(8000)
}
// {/fact}


// {fact rule=improper-certificate-validation@v1.0 defects=0}

var tls = require("tls")
    var fs = require("fs")

    function improperCertificateValidationCompliant() {
        var options = {
            host: 'encrypted.example.com',
            // Compliant: certificate is provided.
            key: fs.readFileSync('keys/client-key.pem'),
            cert: fs.readFileSync('keys/client-cert.pem')
        }

        tls.createServer(options, (req: any, res: { writeHead: (arg0: number) => void; end: () => void }) => {
            res.writeHead(200)
            res.end()
        }).listen(8000)
    }
// {/fact}