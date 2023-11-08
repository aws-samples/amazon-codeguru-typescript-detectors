// {fact rule=file-and-directory-information-exposure@v1.0 defects=1}
import express, { Express } from 'express'
var serveStatic = require("serve-static")
var app : Express = express()

function fileAndDirectoryInformationExposureNoncompliant()
{
  // Noncompliant: dotfiles variable is set to 'allow'.
  var serveStaticMiddleware = serveStatic('public', { index: false, dotfiles: 'allow' })
  app.use(serveStaticMiddleware)
}
// {/fact}

// {fact rule=file-and-directory-information-exposure@v1.0 defects=0}
import express, { Express } from 'express'
var serveStatic = require("serve-static")
var app : Express = express()

function fileAndDirectoryInformationExposureCompliant(safeDomain)
{
  // Compliant: dotfiles variable is set to 'ignore'.
  var serveStaticMiddleware = serveStatic('public', { 'index': false, 'dotfiles': 'ignore' })
  app.use(serveStaticMiddleware)
}
// {/fact}