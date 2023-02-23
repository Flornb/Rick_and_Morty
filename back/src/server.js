const http = require("http");
const characters = requere("./utils/data.js");
const PORT = 3001;

module.exports = 
http.createServer ((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //ver si esto va aca
    if (req.url.includes("rickandmorty/character")) {
        let id = req.url.split("/").at(-1);
        //let characterFilter = characters.filter(char=> char.id === Number(id))
        let characterFilter = characters.find (char => char.id === Number(id))
        res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(characterFilter))
    }

}).listen(PORT, "localhost")