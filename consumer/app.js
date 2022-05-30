console.log('consumer....')

var Kafka = require('node-rdkafka')

var consumer = Kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
  }, {});

consumer.connect() // Connect To Broker

consumer.on('ready', () =>{
    console.log('consumer ready...')

    consumer.subscribe(['test']) // Subscribe to Topic
    consumer.consume()
}).on('data', (data) => { // When Data Comes in event
    console.log(`Messaged Received: ${data.value}`)
})
