import Dispatchers from '../Common/Dispatchers'
import ErrorConstants from './ErrorConstants'

export default class ErrorActions {
  static reportError(errorCode, description) {
    Dispatchers.ErrorDispatcher.dispatch({
      type: errorCode,
      description: description
    });
  }
}