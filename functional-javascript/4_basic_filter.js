function getShortMessages(messages) {
  function getMessage(obj) {
    return obj.message;
  }
  
  function shortMessage(text) {
    return text.length < 50; 
  }

  return messages.map(getMessage).filter(shortMessage);
}

module.exports = getShortMessages
