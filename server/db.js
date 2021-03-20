const MongoClient = require("mongodb").MongoClient;
const config = require("./config");
const assert = require('assert');

let _db;
module.exports = {
    getDatabase,
    initDatabase
};

function initDatabase(callback) {
    if (_db) {
        console.warn("Trying to init Database again!");
        return callback(null, _db);
    }
    console.log(config.db)
    MongoClient.connect(config.db.connectionString, (err, client) => {
        if (err) {
            return callback(err);
        }
        console.log("DB initialized - connected to: " + config.db.connectionString.split("@")[1]);
        _db = client.db(config.db.databaseName);

        return callback(null, _db);
    });
}

function getDatabase() {
    assert.ok(_db, "Database has not been initialized. Please cal initDatabase() first.");
    return _db;
}