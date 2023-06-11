require('dotenv').config();

var jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Vérifier si le token est présent
  if (token == null) {
    return res.status(401).json({
      error: false,
      message: ["Pas de Token."]
    })
  }

  // Vérifier et décoder le token JWT
  jwt.verify(token, process.env.JWT, (err, user) => {

    if (err) {
      console.log(err)
      return res.status(403).json({
        error: true,
        message: ["Erreur d'authontification, vérifie le token."]
      })
    }

    // Stocker les informations utilisateur décodées dans req.user
    req.user = user

    // Passer à la prochaine fonction middleware
    next();

  });

}