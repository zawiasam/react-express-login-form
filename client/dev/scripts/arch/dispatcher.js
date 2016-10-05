export default class Dispatcher {
    constructor() {
        this._id = 0;
        this._callbacks = {};
    }

    register(callback) {
        const callbackId = 'CID_' + this._id++;
        this._callbacks[callbackId] = callback;

        return callbackId;
    }

    dispatch(action) {
        for (let callbackId in this._callbacks) {
            this._callbacks[callbackId](action);
        }
    } 
}
