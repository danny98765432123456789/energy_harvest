var MShepherd = require('mqtt-shepherd');
var qserver = new MShepherd();
qserver.on('ready', function() {
  console.log('My MQTT machine server is now ready.');
  // when server is ready, allow devices to join the network within 180 secs
  qserver.permitJoin(180);
});
qserver.start(function(err) {
  if (err)
    console.log(err);
});
