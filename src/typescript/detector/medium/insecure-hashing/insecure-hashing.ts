// {fact rule=insecure-hashing@v1.0 defects=1}


function insecureHashingNoncompliant()
{
    var crypto = require('crypto')
    // Noncompliant: 'md5' is weak hash algorithm.
    var insecure_hash_algo = 'md5'
    crypto.createHash(insecure_hash_algo)
}
//{/fact}

// {fact rule=insecure-hashing@v1.0 defects=0}

function insecureHashingCompliant()
{
    var crypto = require('crypto')
    // Compliant: 'SHA-256' is secure hash algorithm.
    var secure_hash_algo = 'SHA-256'
    crypto.createHash(secure_hash_algo)
}
//{/fact}