//Import packages
const express = require('express')
const { append } = require('express/lib/response')
const morgan = require('morgan')

//Configure out port
//Check if it is set in the environment variable, if not then we default to 3000
const port = process.env.PORT || 3000

console.info(`port = ${port}`)

//Create an instance of express application
const app = express()

//Log all request
app.use(morgan('common'))

//GET /
app.get('/', (req, resp) => {
    //what is the media type
    resp.type('text/html')
    //set the status code
    resp.status(200)
    //send the response
    resp.send(`<h1> the current time is now ${new Date()}</h1><img src="/static/69181576_2576577462372666_7979127424317128704_n.jpg">`)
})
// Serve static resources
app.use("/static", express.static(__dirname + "/static"))

//Start our server
app.listen(port, ()=> {
    console.info(`Starting application on port ${port} at ${new Date()}`)
})


