// import des modules
const express = require('express')
const bodyParser = require('body-parser')
// appel au package 
const app = express()
// import middleware
const checkUserData = require('./middlewares/checkUserData')
// import controllers
const userController = require('./controllers/userController')
const globalController = require('./controllers/globalController')


app.use(bodyParser.json())

// première routes en get 
app.get('/', globalController.getHome)

// mise à jour d'un élément
app.put('/', globalController.updateElement)

// suppression d'un élément
app.delete('/', globalController.deleteElement)

// création d'un utilisateur
app.post('/middleware', checkUserData, userController.createUser)

// déclenche le serveur sur le port 4000
app.listen(4000, () => {
    console.log("Server start localhost:4000")
})