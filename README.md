[![https://img.shields.io/npm/v/easy_jdb?color=red&label=npm%20version&style=flat-square]]

# easy_jdb
 Easy json DB. (nodejs)

# Install
`npm install easy_jdb`

# Example
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
