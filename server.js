const express = require('express');
const app = express();

app.use(express.json());


let users = [
    {email: "venkyroy@gmail.com", password:"venkyroy@123"},
    {email: "sai@gmail.com", password:"sai@123"},
    {email: "hari@gmail.com", password:"hari@123"}

];


app.post("/user", (req,res) =>{
    const {email, password} = req.body;
    const userExists = users.find(user => user.email === email);

    if(userExists){
        res.send("User Already exists");
    }else{
        users.push({email, password});
        res.send("User created successfully");
    }
});


app.get("/user", (req, res) =>{
    const {email, password} = req.query;
    

    if(email){
        const user = users.find(user => user.email===email);
        if(!user){
            res.json("Email cannot be empty");
        }
    }else{
        res.send("logged in")
    }

    if(password){
        const user = users.find(user => user.password===password);
        if(!user){
            res.json("Password cannot be empty");
        }
    }else{
        res.send("logged in");
    }
});


const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is runnig on: ${PORT}`)
});