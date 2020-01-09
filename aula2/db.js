var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:27017/aula02", 
    function(err, conn){
        if(err) return console.log(err);
        global.conn = conn.db("aula02");
    }
);

function findAll(callback){
    global.conn.collection("clientes").find({}).toArray(callback);
        
    
}
    
module.exports ={findAll}