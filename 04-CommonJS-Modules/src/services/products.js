//todas funções que lidam com o produto
const productType = {
    version: "digital",
    tax: "x1",
}

//hidden const
const apiURL ={
    url: 'www.google.com/api'
}

//hidden function
async function doBreakLine() {
    console.log("\n");
}

async function getFullName(codeID, productName) {
    console.log("product: " + codeID + '--' + productName);
    await doBreakLine;
}

async function getProductLabel(productName) {
    console.log("Product: "+ productName);
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
};