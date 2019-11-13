
const express = require('express')
const app = express()
const methodOverride = require('method-override')


const { homeRouter } = require('./controllers/home.js')
const { agentRouter } = require('./controllers/agent.js')
const { agencyRouter } = require('./controllers/agency.js')

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

/* Step 3.b
 *
 * set the view engine of express to use the hbs (handlebars) package 
 */
app.set('view engine', 'hbs')


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/', homeRouter)
app.use('/', agentRouter)
app.use('/', agencyRouter)

/* Step 5
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file 
 */
const PORT = process.env.PORT || 3000 

/* Step 6
 *
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
