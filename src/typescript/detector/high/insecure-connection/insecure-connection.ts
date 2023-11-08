// {fact rule=insecure-connection@v1.0 defects=1}
import * as net from 'net';
var socket = net.Socket
function insecureConnectionNoncompliant()
{
  var port = 0
  // Noncompliant: host value is not specified.
  var host = ''
  var server = socket.connect(port, host)
}
// {/fact}


// {fact rule=insecure_connection@v1.0 defects=0}
import * as net from 'net';
var socket = net.Socket
function insecureConnectionCompliant()
{
  var port = 0
  // Compliant: host value is specified.
  var host = '192.168.1.1'
  var server = socket.connect(port, host)
}
// {/fact}