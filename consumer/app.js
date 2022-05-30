console.log('consumer....')

import Kafka from 'node-rdkafka'
import eventType from '../eventType.js'

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
    console.log(`Messaged Received: ${eventType.fromBuffer(data.value)}`)
})
