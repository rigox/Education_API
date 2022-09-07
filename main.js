const express =  require("express")

const app = express.App();

const PORT  =  8001 | 8002 


 app.get('/',(req,res)=>{
     res.send('Hello')
 })


app.listen(PORT , ()=>{
      console.log(`Listening on Port ${{PORT}}`)
})