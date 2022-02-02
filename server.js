//Requiring Express
const express = require('express')

//Initializing the app
const app = express()

//Creating the Port
const PORT = 4444



//Creating the server
app.listen (PORT, error =>
  error ? console.log(error) : console.log(`the server is running on PORT ${PORT}`)
)

//middleware
const verifDate =(req,res,next) =>{
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let hour=new Date().getHours();
     
    if (days [new Date().getDay()]!=='Sunday' && days[new Date().getDay]!=='Saturday' 
      && hour<=17 && hour>=9 ){

          next()
      } else {
          res.send("We are closed , please come back later")
      }
}

//Using the middleware in the app
app.use(verifDate)

//Routing Middleware
app.use(express.static("Public"))