var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (err, conn) {
  conn.createChannel(function (err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {
      durable: true
    });
    console.log(" [*] Waiting for message in %s. To exit press CTRL+C", q);
    ch.consume(q, function (msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {
      noAck: true
    });
  });
});
