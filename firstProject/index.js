const http = require('http')

const server = http.createServer((req,res)=>{ //creation d'un server ihendeler requete
    //hadhrna el header ta el requette//
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Hello for my server")
})

    //server=lezm ikoun andu host w port 
    const PORT= 5000 //ta3tih el port eli bch ye5dm alih 
    server.listen(PORT,()=>{
        console.log('server is running on port',PORT)
    }) 

//framework=yatik howa el architecture eli bch t5dm a3leha 
//librerie=taml architecture wa7dk eli thb a3lha 
 //midelware=
 //401=andu el ha9
 //403=permission
 //mongoDB=db no sql (stokcee data no structuree) te9bl ay haja format t3da document 
 //jpa=teb3 mn famille  orm =  i7awlk mn objet el requette sql et mn requette el objet 
 

