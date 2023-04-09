var express = require('express')
var bodyparser = require('body-parser');
var fs = require('fs')
var app = express()
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jpbazott@gmail.com',
    pass: 'wefybyymcqkppkqu'
  },
  tls: {
    rejectUnauthorized: false
  }
});



app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', function(request, response) {
  console.log('GET /')
  var html = `
    <html>
        <body>
            <form method="post" action="http://localhost:3000">Name: 
                <input type="text" names="name" />
                <input type="submit" value="Submit" />
            </form>
        </body>
    </html>`
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(html)
})

app.post('/', function(request, response) {
    request.body.names.forEach(name => {
        console.log(name);
        var mailOptions = {
            from: 'jpbazott@gmail.com',
            to: name,
            subject: 'Guardiao',
            text: 'Mensagem de emergencia'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    });
})

const port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)