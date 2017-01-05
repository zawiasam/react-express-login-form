import winston from 'winston';

/**
 * winston logger class
 * @typedef WinstonLogger
 * @property {function} error - error logger function
 * @property {function} warn - warn logger function
 * @property {function} info - info logger function
 */

/**
 * Logger types
 * @typedef {('info'|'warn'|'error')} LogType - Allowed Logger types
 */

/**
 * Enum of logger levels
 * @readonly 
 * @enum {string}
 */
let errorLevel = {
  error: 'error',
  warn: 'warn',
  info: 'info',
}

let dbLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: 'info'
    }),
    new (winston.transports.File)({
      filename: "db-logger.log",
      level: "warn"
    })
  ]
});

let bizLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: 'info'
    }),
    new (winston.transports.File)({
      filename: "biz-logger.log",
      level: "warn"
    })
  ]
});

class PrivetLogger {
  /**
   * log message using given logger, at given level, with given message
   * @param {WinstonLogger} logger instance of logger
   * @param {LogType} level one of kwnon levels [info|warn|error]
   * @param {string} message description
   */
  static log(logger, level, message) {
    logger[level](message);
  }
}

export default class Logger {
  /**
   * log message on given level
   * @param {string} level level of log entry
   * @param {string} message message to log
   */
  static dbLog(level, message) {
    PrivetLogger.log(dbLogger, level, message);
  }

  /**
   * log db error
   * @param {string} message error message
   */
  static dbLogError(message) {
    this.dbLog('error', message);
  }

  /**
   * log biz event with given level
   * @param {LogType} level level of log message
   * @param {string} message description
   */
  static bizLog(level, message) {
    PrivetLogger.log(bizLogger, level, message)
  }

  /**
   * log biz error
   * @param {string} message description
   */
  static bizError(message) {
    this.bizLog("error", message);
  }

  /**
   * log biz warning
   * @param {string} message description
   */
  static bizWarning(message) {
    this.bizLog("warn", message);
  }
}
