const test = require('tape');
const supertest = require('supertest');
const movies = require('./movies');
const server = require("../server/server");
const repository = require("../repository/repository");

function runTests(){
    
    var app = null;
    server.start(movies, repository, (err, app) => {
        var id = null;
        test("AddMovie", (t) => {
            supertest(app)
                .post('/movies/')
                .send({
                    titulo: "Vingadores", 
                    sinopse: "Heróis mais poderosos da Terra", 
                    duracao: 120, 
                    dataLancamento: new Date(),
                    imagem: "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
                    categorias: ["Aventura"]
                })
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    t.assert(res && res.body.insertedCount > 0, "Movie Added");
                    t.end();
                });
        })

        //tests here
        test("GetAllMovies", (t) => {
            supertest(app)
                .get('/movies')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) =>{
                    if(res.body && res.body.length > 0) 
                        id = res.body[0]._id;
                    
                    t.assert(res.body && res.body.length > 0, "All Movies returned");
                    t.end();
                });

        })
    
        test("GetMovieById", (t) => {
            supertest(app)
                .get('/movies/' + id)
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    t.assert(res.body && res.body._id === id, "Movie By Id Returned");
                    t.end();
                })
        })
    
        test("GetMoviePremieres", (t) => {
            supertest(app)
                .get('/movies/premieres')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) =>{
                    t.assert(res.body && res.body.length > 0, "Premiere Movies Returned");
                    t.end();
                });
        })
        
        server.stop();
    })

}

module.exports = { runTests }