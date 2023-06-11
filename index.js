// import des modules
const express = require('express')
const bodyParser = require('body-parser')
// appel au package 
const app = express()

// import routes
const globalRoutes = require('./routes/globalRoutes')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
// auth routes
const authRoutes = require('./routes/authRoutes')
const unsubscribeRoutes = require('./routes/unsubscribeRoutes')
const modifySubscriptionRoutes = require('./routes/modifySubscriptionRoutes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Activation des routes
app.use('/', globalRoutes);
// Ici on ajoute 'user' à la route initialement 'middleware' 
// Les requêtes s'effectueront sur /user/middleware 
app.use('/user', userRoutes);
app.use('/product', productRoutes);
// auth routes
app.use('/auth', authRoutes);
app.use('/unsubscribe', unsubscribeRoutes);
app.use('/modifySubscription', modifySubscriptionRoutes);

// var mysql      = require("mysql");
// require('dotenv').config();


//     const connection =  mysql.createConnection({
//         host     : process.env.HOSTNAME,
//         user     : process.env.DB_USERNAME,
//         password : process.env.PASSWORD,
//         database : process.env.DB_NAME
//     });
//     connection.connect((err) => {
//         if(err){
//             console.error("errere");
//             return;
//         }
//         console.log("connect")
//     });



// déclenche le serveur sur le port 4000
app.listen(4000, () => {
    console.log("Server start localhost:4000")
})