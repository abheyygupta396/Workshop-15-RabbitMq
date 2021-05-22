const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
        throw err;
    }

    connection.createChannel((err, channel) => {

        if (err) {
            throw err;
        }

        let queueName = "Spider-Man";
        let message = "Howz all ?";
        channel.assertQueue(queueName, {

            durable: false
        });
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log(`Sent: ${message}`);
        setTimeout(() => {
            connection.close();
        }, 1000);

    })

})