import dbFirebase from './db-firebase';

export default class UserFirebase {
  static doesExist(id) {
    return new Promise((resolve, reject) =>{
      dbFirebase.getAll(`/users/${id}`).then((data) => {
        resolve(data !== null && data.length);
      }, reject);
    })
  }
}