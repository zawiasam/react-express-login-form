import Dispatchers from "../Common/Dispatchers"
import NewMessageConst from "./NewMessageConst"
import _ from "lodash"

export default class NewMessageActions {
  static sendMessage(message) {
    let messageToDispatch = _.pick(message, ["title", "body", "sender", "receivers", "type", "parent"]);

    Dispatchers.NewMessageDispatcher.dispatch({
      type: NewMessageConst.ACTIONS.SEND_MESSAGE,
      message: messageToDispatch
    });
  }
}
