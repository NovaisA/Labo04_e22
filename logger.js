
//module pour importer pour lafficge de message
const uuid = require('uuid');
const EventEmitter = require('events');
class Logger extends EventEmitter{
    log(user, msg){
        let maDate = new Date().toLocaleString();
        this.emit('message',{id:uuid.v4(),date:maDate, user:user, msg:msg});
    }

    info(user, msg){
        let maDate = new Date().toLocaleString();
        this.emit('message',{id:uuid.v4(),date:maDate, user:user, msg:msg});
    }

    error(user, msg){
        let maDate = new Date().toLocaleString();
        this.emit('message',{id:uuid.v4(),date:maDate, user:user, msg:msg});
    }
}
module.exports = Logger;