const express = require('express') //require=importer
//bch namlu instance mn package eli andna bch njmu nest3mlu les methodes  mta3 express
const app = express()
//application todolist

app.use(express.json())//el midelware 

let todos = [{id:1,title:"title1"},{id:2,title:"title2"}]
app.get('/api/all',(req,res)=>{
    res.send(todos)
})
app.post('/api/todos/create',(req,res)=>{
    todos.push(req.body)
    res.send(todos)
})

app.put('/api/todos/update/:id', (req, res) => {
    const id = Number(req.params.id);
    todos = todos.map((todo) => {
        return todo.id === id ? {...todo, ...req.body}: todo;
    });
    res.send(todos)
});

app.delete('/api/todos/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    todos = todos.filter(todo => todo.id !== id)
    res.send(todos)
});


app.get('/',(req,res) =>{
    res.send('hello from my server')
})



app.listen(5000,()=>{console.log('server runninig onport 5000')}); 


//concept bl pagina tion (faza okhra fy 3ush findAll)= namlu streaming(donnee mch format de json) donee flu de donnee 
//thender client pour tester 



//post=creation
//put/patch=modification 
//get=accee
//delete=suppression 
