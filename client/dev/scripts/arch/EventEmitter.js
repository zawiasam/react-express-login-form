export default class EventEmitter {
    constructor() {
        this._events = {}
        this.on = this.addListener.bind(this);
        this.emmit = this.emmit.bind(this);
        this.removeListener = this.removeListener.bind(this);
    }

    addListener(eventName, listener) {
        this._events[eventName] = this._events[eventName] || [];
        this._events[eventName].push(listener);
    }

    emmit(eventName) {
        const listeners = this._events[eventName] || [];
        listeners.forEach((listener) => {
            listener();
        })
    }

    removeListener(eventName, listener) {
        let listeners = this._events[eventName] || [];
        listeners.splice(listeners.indexOf(listener), 1);
    }
}