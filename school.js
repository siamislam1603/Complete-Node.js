const EventEmitter=require('events');

class School extends EventEmitter{
    startPeriod(){
        console.log('Class Started');

        // The bell rings on, raise an event
        setTimeout(()=>{
            this.emit('bellRang',{
                period: 'First',
                text: 'Period Ended'
            });
        },2000);   
    }
}
module.exports=School;