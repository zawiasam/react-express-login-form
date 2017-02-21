import Dispatchers from "../Common/Dispatchers"
import NewMessageConst from "./NewMessageConst"
import AddressBookStore from "../AddressBook/AddressBookStore"
import _ from "lodash"

export default class NewMessageActions {
  static sendMessage(message) {
    let messageToDispatch = _.pick(message, ["title", "body", "sender", "receivers", "type", "parent"]);
    let receivers = [];
    messageToDispatch.receivers.forEach((rec) => {
      AddressBookStore.data.forEach((item) => {
        if (rec === item.id) {
          receivers.push(item);
          return;
        }
      })
    });

    messageToDispatch.receivers = receivers;
    Dispatchers.NewMessageDispatcher.dispatch({
      type: NewMessageConst.ACTIONS.SEND_MESSAGE,
      message: messageToDispatch
    });
  }
}
