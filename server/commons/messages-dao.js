import db from './db-firebase';
import logger from './logger'
import ErrorFactory from './app-errors'

function rejectWithCustomMessage(err, reject) {
  reject(ErrorFactory.DbError(ErrorFactory.ErrorCode.DbDataAccess001));
}

export default class MessagesDao {
  static getMessagesByUserId(userId) {
    logger.dbLogDebug(`try to get data from db for user [${userId}]`);
    return new Promise((resolve, reject) => {
      db.getAll(`userData/${userId}/messages`).then((items) => {
        logger.dbInfo(`request for message list of [${userId}] success`);
        logger.dbVerbose(`items ${JSON.stringify(items)}`);
        resolve(items);
      }, (err) => {
        rejectWithCustomMessage(err, reject);
      })
    })
  }
}