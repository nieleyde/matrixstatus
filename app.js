var mqtt = require('mqtt');
var os = require("os");
var client = mqtt.connect('mqtt://hamilton.eyde.me');

var options = {
  refresh: 5000, //milliseconds
  timeout: 1000 //milliseconds
};
console.log('STARTING');
matrix.init('temperature', options).then(function(data){
  //console.log('T>>>>>>>>', data);
  
  var payload = {
     hostname: os.hostname(),
     totalmem: os.totalmem(),
     freemem: os.freemem(),
     network: os.networkInterfaces()
     };


  client.publish('matrix/uno/status', JSON.stringify(payload)); 
});
