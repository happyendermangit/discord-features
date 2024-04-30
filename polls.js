/** this is useless now **/
// just archiving it
let Savedmessages = {}

findByProps('_dispatch').addInterceptor(e=>{
    if (e.type === "MESSAGE_CREATE"){
        console.log(e)
        Savedmessages[e.message.id] = e 
    }
    if (e.type === "MESSAGE_SEND_FAILED"){
        console.log(Savedmessages[e.messageId].messsage.poll)
        if (Savedmessages[e.messageId].messsage.poll){
            findByProps('_dispatch').dispatch(Savedmessages[e.messageId])
        }
    }
                                        
})
