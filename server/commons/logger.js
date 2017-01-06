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
 * @typedef {('verbose'|'info'|'warn'|'error')} LogType - Allowed Logger types
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
  verbose: 'verbose',
  debug: 'debug',
  silly: 'silly',
}

let dbLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: errorLevel.debug,
    }),
    new (winston.transports.File)({
      filename: "db-logger.log",
      level: errorLevel.info,
    })
  ]
});

let bizLogger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: errorLevel.debug,
    }),
    new (winston.transports.File)({
      filename: "biz-logger.log",
      level: errorLevel.info,
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
  static dbError(message) {
    this.dbLog(errorLevel.error, message);
  }

  /**
   * log db info
   * @param {string} message error message
   */
  static dbInfo(message) {
    this.dbLog(errorLevel.info, message);
  }

  /**
   * log db verbose
   * @param {string} message error message
   */
  static dbVerbose(message) {
    this.dbLog(errorLevel.verbose, message);
  }

  /**
   * log db debug
   * @param {string} message error message
   */
  static dbLogDebug(message) {
    this.dbLog(errorLevel.debug, message);
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
    this.bizLog(errorLevel.error, message);
  }

  /**
   * log biz warning
   * @param {string} message description
   */
  static bizWarning(message) {
    this.bizLog(errorLevel.warn, message);
  }

  /**
   * log biz info
   * @param {string} message description
   */
  static bizInfo(message) {
    this.bizLog(errorLevel.info, message);
  }

  /**
   * log biz debug
   * @param {string} message description
   */
  static bizDebug(message) {
    this.bizLog(errorLevel.debug, message);
  }
}
