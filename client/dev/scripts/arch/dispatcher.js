export default class Dispatcher {
    constructor() {
        this._id = 0;
        this._callbacks = {};
    }

    /**
     * This callback type is called `requestCallback` and is displayed as a global symbol.
     *
     * @callback actionCallback
     * @param {Action} action
     */

    /**
     * @typedef Action
     * @property {string} type - an action name.
     */

    /**
     * Takes a number and returns its square value
     *
     * @param {actionCallback} callback
     * @return {string}
     */
    register(callback) {
        const callbackId = 'CID_' + this._id++;
        this._callbacks[callbackId] = callback;

        return callbackId;
    }

    /**
     * Takes an action
     * 
     * @param {Action} action
     */
    dispatch(action) {
        for (let callbackId in this._callbacks) {
            this._callbacks[callbackId](action);
        }
    }
}

