const express=require('express');
const ejs=require('ejs');
const fs=require('fs');
const app=express();

app.use(express.static(__dirname));

app.get('/',(request,response)=>{
    response.redirect('/main');
});
app.get('/main',(request,response)=>{
    fs.readFile('main.html','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        //response.render(data);
        response.end(data);
    });
});

app.get('/login',(request,response)=>{

});

app.get('/logout',(request,response)=>{

});

app.get('/signup',(request,response)=>{
    fs.readFile('signup.ejs','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.render(data);
    });
});

app.get('/study',(request,response)=>{
    fs.readFile('study.ejs','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.render(data);
    });
});

app.get('/hobby',(request,response)=>{
    fs.readFile('hobby.ejs','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.render(data);
    });
});

app.get('/alba',(request,response)=>{
    fs.readFile('alba.ejs','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.render(data);
    });
});

app.get('/club',(request,response)=>{
    fs.readFile('club.ejs','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.render(data);
    });
});

app.get('/contest',(request,response)=>{
    fs.readFile('contest.ejs','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.render(data);
    });
});

app.get('/market',(request,response)=>{
    fs.readFile('market.ejs','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.render(data);
    });
});

app.get('/gonggu',(request,response)=>{
    fs.readFile('gonggu.ejs','utf-8',(error,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.render(data);
    });
});

app.listen(3000);

console.log("Server is running\n");