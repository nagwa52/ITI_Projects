var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs');

app.post('/', function(req, res) {
	res.send('<html><head></head><body><h1>Welcome</h1></body></html>');
});

app.post('/login', function(req, res) {
    var inUser = req.body;
    var users = fs.readFileSync('./data.json');
    users = JSON.parse(users);
    var user = '';
    try{
        users.forEach(element => {
            if(element.email === inUser.email){
                user = element;
                throw 'Break';
            }
        });
    }catch (e) {
        if (e !== 'Break') throw e
    }
    if(user === ''){
        res.send("you've entered an email that doesn't exist, please signup.");
    }else if(inUser.email === user.email && inUser.password == user.password){
        res.render('profile', {Name: user.name});
    }else if(inUser.email === user.email && inUser.password != user.password){
        res.send("wrong password");
    } 
});

app.post('/signup', function(req, res) {
    var inUser = req.body;
    var users = fs.readFileSync('./data.json');
        users = JSON.parse(users);

        var user = ''
        try{
            users.forEach(element => {
                if(element.email === inUser.email){
                    user = element;
                    throw 'Break';
                }
            });
        }catch (e) {
            if (e !== 'Break') throw e
        }

        if(user===''){
            users.push(inUser);
            console.log(users);

            var toWrite = fs.createWriteStream('data.json')
            toWrite.write(JSON.stringify(users));

            res.send("regesterd successfully");
        }else{
            res.send("This email already exists");
        }
});

app.listen(3000);