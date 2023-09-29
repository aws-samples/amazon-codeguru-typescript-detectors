
// {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
var jwt = require("jsonwebtoken")
class Users{
    constructor(){

    }
   
    findOne(a:any,b:any){

    }
}


function insufficientlyProtectedCredentialsNoncompliant() {
    var req:any,key:any;
    var  User = new Users()
    User.findOne({ email: req.body.email }, function (e: any, user: any) {
        // Noncompliant: object is passed directly to `jsonwebtoken.sign()`.
        var token = jwt.sign(user, key, { expiresIn: 60 * 60 * 10 })
        return token
    })
}
//{/fact}

// {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
var jwt = require("jsonwebtoken")

function insufficientlyProtectedCredentialsCompliant() {
    var req:any,key:any;
    var  User = new Users()
    User.findOne({ name: req.body.name }, function (err: any, user: any) {
        // Compliant: validated object before passing into `jsonwebtoken.sign()`.
        var token = jwt.sign(name , key, { algorithm: 'HS256', expiresIn: 60 * 60 * 10 })
        return token
    })
}
//{/fact}