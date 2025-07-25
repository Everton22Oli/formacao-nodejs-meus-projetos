//desrtructuring function (pega apenas as funções que eu quero do outro arquivo que estão sendo exportadas)
const {getFullName, productType} = require('./services/products')
//pega todas as funções que contém no arquivo e estão sendo exportadas
const product = require("./services/products");
const config = require('./services/config');
const database = require('./services/database')

async function main() {
    console.log(config.devArea.production);
    console.log(config.devArea.version);
    console.log(config.client);
    database.connectToDatabase('my-data')
    database.disconnectDatabase()


    getFullName('1','teclado');
    product.getFullName('1','teclado');

    console.log(productType);
    //console.log(p.productType.version);
    //console.log(p.productType.tax);
    // console.log('Carrinho de compras:');
    // product.getFullName("408","mousepad");
    // product.getFullName("508","mouse");
    // product.getProductLabel("Mousepad");
}

main()
