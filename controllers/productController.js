// { } obligatoire ici
const { faker } = require('@faker-js/faker');

const createProduct = (req, res) => {
    const productId = Math.floor(Math.random() * 10000); // Génère un faux ID
    res.status(200).json({
        message: 'Produit créé avec succès',
        product: {id: productId, ...req.body}
    });
};

const readProduct = (req, res) => {
    // Génération de fausses données product
    const productName = faker.commerce.productName();
    const productDescription = faker.commerce.productDescription();
    const productPrice = faker.commerce.price();


    const productId = req.params.id; 
    res.status(200).json({
        // On crée un faux produit pour simuler la réponse de la BDD
        id: productId,
        name: productName,
        description: productDescription,
        price: productPrice
    });
}

const updateProduct = (req, res) => {
    res.status(200).json({
        message: 'Produit mis à jour avec succès',
    });
};

const deleteProduct = (req, res) => {
    res.status(200).json({
        message: 'Produit supprimé avec succès',
    });
};

// Syntaxe différente pour exporter des modules

module.exports={createProduct, readProduct, updateProduct, deleteProduct};
