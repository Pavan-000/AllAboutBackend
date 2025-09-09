const express = require('express');
const cors = require("cors")
const app = express();
const port = 3000;

// Middleware to parse json
app.use(express.json());
app.use(cors())

let users = [
    {id : 1, name : "Pavan"},
    {id : 2, name : "John"},
    {id : 3, name : "Doe"}
];
app.get("/", (req, res) => {
    res.send({"Hello" : "Hello There"});
})

// Create New User
app.post('/users', (req, res) => {
    const newUser = {
        id : users.length + 1,
        name : req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);

});

// Read All Users
app.get("/users", (req, res) => {
    res.json(users);
});

// Read User by ID
app.get("/users/:id", (req, res) => {
    const user =  users.find(u => u.id === parseInt(req.params.id));

    if(!user) return res.status(404).send("User not found");

    res.json(user);
})

// Update User by ID
app.put("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));

    if(!user) 
        return res.status(404).send("User not found");

    user.name = req.body.name;
    res.json(user);
})

// Delete User by ID
app.delete("/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt.params.id)

    if(!user){
        return res.status(404).send("User not found");
    }
    users.delete(id => user.id === id)
    res.json({message : "User deleted"})
})

app.listen(port, () => {
    console.log("Server listening at Port 3000")
})

