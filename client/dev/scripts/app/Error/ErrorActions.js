import ErrorDispatcher from './ErrorDispatcher'
import ErrorConstants from './ErrorConstants'

export default class ErrorActions {
  static reportError(errorCode, description) {
    ErrorDispatcher.dispatch({type: errorCode,
       description: description});
  }
}