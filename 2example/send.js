var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
  conn.createChannel(function (err, ch) {
    var q = 'hello';
    var msg = "Hello World! ";

    ch.assertQueue(q, {
      durable: true
    });
    for (var i = 0; i < 100; i++) ch.sendToQueue(q, new Buffer(msg + i), {
      persistent: true
    });
    console.log(" [x] Sent 'Hello World!'");
  });

  setTimeout(function () {
    conn.close();
    process.exit(0);
  }, 500);
});
