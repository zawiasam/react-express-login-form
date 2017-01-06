const ErrorCodes = {
  DbDataAccess001: 'ECDB001',
  BizNonExistingGroup: 'ECBZ001',
}

var messages = {}
messages[ErrorCodes.DbDataAccess001] = "Db access problem";

class MessageFormatter {
  static getMessageForError(errorCode) {
    return messages[errorCode] || '';
  }

  static formatMessageForErrorCode(code, message) {
    let errorMessage = getMessageForError(code);
    let formattedMessage = errorMessage + (message || '');

    return formattedMessage;
  }
}

export default class ErrorFactory {
  static BizError(errorCode, message) {
    let errorMessage = MessageFormatter.formatMessageForErrorCode(errorCode, message);
    let err = new Error(errorMessage);
    err.httpStatus = 500;
    err.errorCode = errorCode || 128;

    return err;
  }

  static DbError(errorCode, message) {
    let errorMessage = MessageFormatter.formatMessageForErrorCode(errorCode, message);
    let err = new Error(errorMessage);
    err.httpStatus = 503;
    err.errorCode = errorCode || 64;

    return err;
  }

  static get ErrorCode() {
    return ErrorCodes
  }
}


