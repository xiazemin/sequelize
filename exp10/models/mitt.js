'use strict'

const EventEimtter =require('events').EventEmitter

const mitt=new EventEimtter()

mitt.amit=(factory,event,record)=>{
    record.Model={name:factory}
    console.log("mitt.amit")
    console.log(JSON.stringify({factory,event,record}))
    mitt.emit('svc',{factory,event,record})
}

module.exports=mitt