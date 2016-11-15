export default class Dispatcher {
    constructor() {
        this._id = 0;
        this._callbacks = {};
    }


/// <summary name='Action' type='Object'>my test summary</summary>
/// <field name='type' type='String'>testid</field>

    /**
     * @typedef {Object} Action
     * @property {string} type An action name.
     */
    /**
     * This callback type is called `requestCallback` and is displayed as a global symbol.
     *
     * @callback {func} actionCallback
     * @param {Action} action
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

