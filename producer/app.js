console.log('producer....')

var Kafka = require('node-rdkafka')

var stream = Kafka.Producer.createWriteStream({
    'metadata.broker.list': 'localhost:9092'
  }, {}, {
    topic: 'test'
  });

function queueMessage()
{
    const success = stream.write(Buffer.from('hi'))
    if(success)
    {
        console.log('Message Wrote Successfully to Topic')
    }
    else
    {
        console.log('Something went wrong')
    }
}

setInterval(()=>{
    queueMessage()
},3000)