var mongoClient = require("mongodb").MongoClient;
var objectId = require("mongodb").ObjectId;

function conectar(callback){
    mongoClient.connect('mongodb://localhost:27017', function(err, conn){
        if(err) return console.log(err);
    
        global.conn = conn.db("aula04");
        callback();
    })
}
function findClientes(callback){
    global.conn.collection("clientes").find();

}

function insertClientes(cliente, callback){
    global.conn.collection("clientes").insert(cliente, callback);
    
}

function updateClientes(cliente, callback){
    global.conn.collection("clientes").update({_id: objectId(cliente._id)}.cliente, callback);
}

function deleteClientes(id, callback){
    global.conn.collection("clientes").remove({_id: objectId(id)})
}
module.exports = {conectar, findClientes, insertClientes, updateClientes, deleteClientes}