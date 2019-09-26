class TimerStorage {
    constructor() {
        this.storage = new Collection();

        if (window.localStorage !== undefined) {
            this.storage = window.localStorage;
        }
    }
    get(key) {
        return this.storage.getItem(key);
    }
    set(key, value) {
        this.storage.setItem(key, value);
        return true;
    }
    has(key) {
        return this.storage.hasItem(key);
    }
}
