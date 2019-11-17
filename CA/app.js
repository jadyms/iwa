var http = require('http'), //server communicate with browser
    express = require('express'), //path
    fs = require('fs'),
    xmlParse = require('xslt-processor').xmlParse,
    xsltProcess = require('xslt-processor').xsltProcess;

    // npm is the Node Package Management
    // $ npm install http express fs xslt-processor 

    var router = express();
    var server = http.createServer(router);
    var path = require('path');
    
    router.get('/', function(req,res){
        res.writeHead(200, {'Content-Type':'text/html'});
        var xml = fs.readFileSync('TrackMyStudies.xml', 'utf8');
        var xsl = fs.readFileSync('TrackMyStudies.xsl', 'utf8');
   
        var doc = xmlParse(xml);
        var stylesheet = xmlParse(xsl);

        var result = xsltProcess(doc, stylesheet);
        res.end(result.toString());
    });

    router.use(express.static(path.resolve(__dirname, 'views')));

server.listen(process.env.PORT || 3000, process.env.IP, function(){
    var addr = server.address();
    console.log("Server is listening at ", addr.address + ':' + addr.port)
});
