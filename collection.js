class Collection {
    constructor() {
        this.collection = {};
    }
    getItem(key) {
        this.collection[key];
    }
    hasItem(key) {
        return key in this.collection;
    }
    setItem(key, value) {
        this.collection[key] = value;
    }
}