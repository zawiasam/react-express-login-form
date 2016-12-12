/**
 * Action class
 * @typedef Action
 * @property {string} type - action type to dispatch
 */
    
/** Class representing a dispatcher. */
export class Dispatcher {
    constructor() {
        this._id = 0;
        this._callbacks = {};
    }


    /**
     * This callback type is called `requestCallback` and is displayed as a global symbol.
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
     * Dispatches an action
     * @param {Action} action action to dispatch
     */
    dispatch(action) {
        for (let callbackId in this._callbacks) {
            this._callbacks[callbackId](action);
        }
    }
}

let dispatchInstances = {};

export default class DispatcherFactory {

    /**
     * Takes dispatcher name and returns single instance
     * @param {string} name dispatcher name
     * @return {Dispatcher} single instance of Dispatcher
     */
    static getDispatcher(name) {
        if (!name) {
            throw 'Dispatcher name is missing';
        }

        dispatchInstances[name] = dispatchInstances[name] || new Dispatcher();
        return dispatchInstances[name];
    }
}