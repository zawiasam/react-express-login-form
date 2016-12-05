import Dispatcher from "../../arch/dispatcher"
import NewMessageConst from "./NewMessageConst"
import _ from "lodash"

let NewMessageDispatcher = Dispatcher.getDispatcher("NewMessageDispatcher");
export default class NewMessageActions {
  static sendMessage (message){
    let messageToDispatch = _.pick(message, ["title", "body", "sender", "receivers"]);
    console.log(messageToDispatch);

    NewMessageDispatcher.dispatch({
            type: NewMessageConst.ACTIONS.SEND_MESSAGE,
            message: messageToDispatch
        });
  }
}
