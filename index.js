// import des modules
const express = require('express')
const bodyParser = require('body-parser')
// appel au package 
const app = express()

app.use(bodyParser.urlencoded({extended: false}))

// première routes en get 
app.get('/', function (req, res) {

    let number1 = Number(req.query.number1)
    let number2 = Number(req.query.number2)

    // faire une conditions qui permet de savoir si c'est un chiffre ou pas ? 
    if (isNaN(number1) || isNaN(number2)) {
        
        return res.status(409).json({
            error: true,
            message: ["Vous n'avez pas envoyé de nombre"],
        })
    }

    return res.status(200).json({
        error: false,
        message: ["Hello world"],
        result: number1+number2
    })
})

app.post('/', function (req, res) {

    // nom, prenom, date_naissance, email, phone
    // nom = 1-155, prenom = 1,155, date_naissance = +18 ok sinon erreur, email = type email, phone = 8, 12 
    
    

    return res.status(200).json({
        error: false,
        message: ["Hello world"]
    })
})

// declanche le serveur sur le port 3000
app.listen(3000, () => {
    console.log("Server start localhost:3000")
})