const test = require("tape");
const mongodb = require("./mongodb")

function runTests(){

    //unit tests
    test("MongoDB Connect", (t) => {
        mongodb.connect((err, db)=>{
            t.assert(!err && db, "Connection succeed");
            t.end();
        })
    })

    test("MongoDB Disconnect", function(t){
        t.assert(mongodb.disconnect(), "Disconncted successfully");
        t.end();
    })

}

module.exports = { runTests }