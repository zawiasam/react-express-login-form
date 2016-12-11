import winston from 'winston';

let dbLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: 'error'
    }),
    new (winston.transports.File)({
      filename: "firebase-error.log",
      level: "info"
    })
  ]
});

class Logger {
  static _log (logger, level, message) {
    logger[level](message);
  }
  /**
   * log message on given level
   * @param {string} level level of log entry
   * @param {string} message message to log
   */
  static dbLog(level, message) {
    _log(dbLogger, level, message);
  }
  static dbLogError(message) {
    dbLog('error', message);
  }
}

export default Logger