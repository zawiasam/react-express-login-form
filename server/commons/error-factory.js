export default class ErrorFactory {
  static BizError(message, errorCode) {
    let err = new Error(message);
    err.httpStatus = 500;
    err.errorCode = errorCode || 128;

    return err;
  }

  static DbError(message, errorCode) {
    let err = new Error(message);
    err.httpStatus = 503;
    err.errorCode = errorCode || 64;

    return err;
  }
}