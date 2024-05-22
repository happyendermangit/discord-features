/**
this is made by minerpl (791077984395591720), thanks minerpl!
**/
ms = findByProps("getMessage", "getMessages")
msg = ms.getMessage('CHANNEL_ID', 'MESSAGE_ID')

msg.messageReference = {
        "type": 1, 
        "message_id": "FORWARDED_MESSAGE_ID",
        "channel_id": "FORWARDED_CHANNEL_ID",
        "guild_id": "FORWARDED_GUILD_ID"
  }
msg.messageSnapshots = [{message: ms.getMessage('FORWARDED_CHANNEL_ID', 'FORWARDED_MESSAGE_ID')}]
