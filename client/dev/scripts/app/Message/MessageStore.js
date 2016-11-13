import EventEmmiter from '../../arch/EventEmitter';
import ErrorConstants from '../Error/ErrorConstants';
import ErrorActions from '../Error/ErrorActions';
import promisejs from 'promisejs';

const fakeMessage = {
  messageBody: "Body of the fake message",
  messageDate: new Date(),
  messageTitle: "We are lunching new thing",
}

class MessageStore extends EventEmmiter {
  constructor() {
    super();

    this.emmitChange = this.emmitChange.bind(this);
    this.addChangeListener = this.addChangeListener.bind(this);

    this.getMessage = this.getMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(message) {
    promisejs.post("/api/message", message).then((err, text, xhr) => {
      if (err) {
        ErrorActions.reportError(
          ErrorConstants.api.POST_MESSAGE,
          xhr.status
        );
        return;
      } else {
        try {
          if (text) {
            store = JSON.parse(text);
            this.emmitChange();
          }
        } catch (error) {
          ErrorActions.reportError(
            ErrorConstants.api.POST_MESSAGE,
            "Incorrect server response (" + err + ")"
          );
        }
      }
    });
  }

  getMessage() {
    return fakeMessage;
  }

  emmitChange() {
    this.emmit("change");
  }

  addChangeListener(listener) {
    this.addListener("change", listener);
  }
}

export default new MessageStore()