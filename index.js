const fs = require("node:fs");

class KeyNotExist extends Error {
    constructor (key) {
        super(`Key ${key} doesn't exists!`);
        this.name = "KeyNotExists"
    }
}

class Database {
    constructor(name, autoSave) {
        this.dbName = name;
        if (fs.existsSync(this.dbName) == false) { fs.writeFileSync(this.dbName, "{}"); }
        this.json = JSON.parse(fs.readFileSync(this.dbName));
        this.autoSave = autoSave;
    }

    getValue(key) {
        this.update();
        return this.json[key];
    }

    exists(key) {
        if (this.json[key]) { return true; }
        else { return false; }
    }

    update() {
        this.json = JSON.parse(fs.readFileSync(this.dbName));
    }
    
    remove(key) {
        this.update();
        if (this.exists(key) == false) { throw new KeyNotExist(key); }
        delete this.json[key];
        if (this.autoSave == true) { this.save(); }
    }
        
    setIfNotExists(key, defaultValue) {
        if (!this.json[key]) { this.json[key] = defaultValue; }
        if (this.autoSave == true) { this.save(); }
    }
    
    setValue(key, value) {
        this.json[key] = value;
        if (this.autoSave == true) { this.save(); }
    }

    save() {
        fs.writeFileSync(this.dbName, JSON.stringify(this.json));
    }
}

module.exports = { Database };