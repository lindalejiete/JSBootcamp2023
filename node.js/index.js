/*import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { id: 1, name: "Zymante" },
  { id: 2, name: "Neringa" },
  { id: 3, name: "Viola" },
  { id: 4, name: "Kristina" },
  { id: 5, name: "Vaida" },
];

app.get('/getData', (request, response) => {
  response.send('Response from server');
});

app.get('/users', (request, response) => {
  response.json(users);
});

app.post('/create-user', (request, response) => {
  const requestFromUser = request.body;
  users.push(requestFromUser)
  response.status(201).json(users)
});

app.put('/update-user/:userId', (request, response) => {
  const requestFromUser = request.body;

  const userId = Number(request.params.userId);

  const updateUsers = users.filter((user) => user.id !== userId);
  updateUsers.push(requestFromUser);
  response.status(200).json(updateUsers);
});

app.delete('/delete-user/:userId', (request, response) => {
  const requestFromUser = request.body;

  const userId = Number(request.params.userId);

  const updateUsers = users.filter((user) => user.id !== userId);
  response.status(200).json(updateUsers);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})*/

import http from 'http';
import url from 'url';

const users = [
  { id: 1, name: "Zymante" },
  { id: 2, name: "Neringa" },
  { id: 3, name: "Viola" },
  { id: 4, name: "Kristina" },
  { id: 5, name: "Vaida" },
];

const port = 3000;

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url);

  if (req.method === 'GET') {
    if (parseUrl.pathname === '/') {
      res.writeHead(200, {'Content-Type' : 'text/plain'});
      res.end('Response from server (MAIN ROUTE)');
    }
    if (parseUrl.pathname === '/users') {
      res.writeHead(200, {'Content-Type' : 'application/json'});
      res.end(JSON.stringify(users));
    }
  }

  if (req.method === 'POST') {
    if (parseUrl.pathname === '/create-user') {
      let requestFromUser = '';

      req.on("data", (chunk) => {
        requestFromUser += chunk;
      });

      req.on("end", () => {
        const newUser = JSON.parse(requestFromUser);
        users.push(newUser);
      });

      res.writeHead(201, {'Content-Type' : 'application/json'});
      res.end(JSON.stringify(users));
    }
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}!`)
})