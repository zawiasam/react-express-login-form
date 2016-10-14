const fakeMessage = {
  messageBody: 'Body of the fake message',
  messageDate: new Date(),
  messageTitle: 'We are lunching new thing'
}

export default class MessageStore {
  static getMessage(){
    return fakeMessage;
  }
}