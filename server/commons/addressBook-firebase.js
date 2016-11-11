import dbFirebase from './db-firebase';
import _ from 'lodash';


export default class AddressBookFirebase {
  static getRecipients(id) {
    return dbFirebase.getAll("addressBook");
  }
}