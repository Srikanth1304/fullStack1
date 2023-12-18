import express from "express";  //this module file importing . for this there should add a type:module in pakage.json 
const app=express()
const port=process.env.PORT || 3000
const jokes=[
    {
        id:1,
        title:'joke1',
        content:'This is first joke'
    },
    {
        id:2,
        title:'joke2',
        content:'This is second joke'
    },
    {
        id:3,
        title:'joke3',
        content:'This is third joke'
    }
]

//server on
app.get('/',(req,res)=>{
    res.send("Server ON");
});

//Routing things]
app.get('/api/jokes',(req,res)=>{   //api/ is astandard formate 
    res.json(jokes);
});

//Server Listen
app.listen(port,()=>{
    console.log(`Avaliable at: localhost:${port}`);
});