const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
        throw err;
        console.log(err);
    }

    connection.createChannel((err, channel) => {

        if (err) {
            throw err;

        }

        let queueName = "Spider-Man";
        channel.assertQueue(queueName, {

            durable: false
        });
        channel.consume(queueName, (msg) => {
            console.log(`Recieved: ${msg.content.toString()}`);
            channel.ack(msg);

            // if want to queue the ms use this and remove above line   channel.ack(msg);
            // }, 
            // {
            //     noAck: true
        });

    })

})