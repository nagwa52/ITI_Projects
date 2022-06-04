var http = require('http');
var fs = require('fs');

http.createServer(async function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var html = fs.readFileSync('./index.html', 'utf8');
        res.end(html);

    }else if (req.url === '/login') {
        if(req.method === 'POST'){
            let inUser = '';
            await req.on('data', chunk => {
                inUser += chunk;
            })
            inUser = JSON.parse(inUser);

            var users = fs.readFileSync('./data.json');
            users = JSON.parse(users);

            user = '';
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
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.write("you've entered an email that doesn't exist, please signup.");
            }else if(inUser.email === user.email && inUser.password == user.password){
                res.writeHead(200, {'Content-Type': 'text/html'});
                var html = fs.readFileSync('./profile.html', 'utf8');
                html = html.replace('{name}', user.name);
                res.write(html)
            }else if(inUser.email === user.email && inUser.password != user.password){
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.write("wrong password");
            }           
            
            res.end();
        }
    }else if (req.url === '/signup') {
        if(req.method==="POST"){
            let inUser = '';
            await req.on('data', chunk => {
                inUser += chunk;
            })
            inUser = JSON.parse(inUser);

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

                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write("regesterd successfully");
            }else{
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.write("This email already exists");
            }

            res.end();
        }

    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Not found");
    }

}).listen(3000);