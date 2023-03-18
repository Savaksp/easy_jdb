<p align="center">
 <img alt="npm" src="https://img.shields.io/npm/v/easy_jdb?color=red&label=npm%20version&style=flat-square?style=for-the-badge&logo=appveyor">
 <img alt="npm" src="https://img.shields.io/badge/discord-kweik2%234055-informational?style=for-the-badge&logo=appveyor">
 </p>

## Easy JDB
Easy json DB. (nodejs)

## Install
`npm install easy_jdb`

## Usage
```js
const { Database } = require("easy_jdb");

// Create db object
const db = new Database("users.db", true); // name, autoSave
// Print if key exists
console.log(db.exists("1010")); // key
// Set value to 0 if not exists
db.setIfNotExists("1010", 0); // key, valueToSet
// Print value that we got
console.log(db.getValue("1010")); // key
// Set new value to 50
db.setValue("1010", 50); // key, valueToSet
// Print new value
console.log(db.getValue("1010"));
// Save db if autoSave is false
db.save();
```
