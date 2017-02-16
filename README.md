# MATRIX Creator Heartbeat
Use this to publish heartbeat messages to an MQTT broker.  Messages include device hostname, totalmem, freemem, and network details.

    $ git clone https://github.com/nieleyde/matrixstatus.git


Update MQTT broker host and MQTT topics in app.js

    $ cd matrixstatus
    $ npm install
    $ matrix deploy
    $ matrix start matrixstatus
