const http = require('http');

const port = 8080;

//Server
const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1> home page</h1>");
    }
    if (req.url === '/users') {
        const users = [
            {
                name: 'John', age: 30,
                email: 'john@email.com'
            },

            {
                name: 'Jane', age: 25,
                email: 'jane@email.com'
            },
            {
                name: 'Bob', age: 35,
                email: 'bob@email.com'
            }


        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));

    }
})

server.listen(port, () => console.log(`Rodadno na porta ${port}!`));