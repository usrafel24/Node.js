const http =require('http')
const server =http.createServer((req,res)=>{
const url =req.url
const fs =require('fs')


// Example 1

// if(url === '/home'){
//     res.end('home page')
// }else if(url === '/about'){
//     res.end('about page')
// }else{
//     res.end('error !!! please enter correct path ')
// }

//Example 2

if(url === '/home'){
    fs.readFile('html.html',(err,data)=>{

if(err){
    res.end(err)

}  else{
    res.end(data)
}      
    })

}





})
server.listen(4040,()=>{
    console.log('server is running http://localhost:4040');
})