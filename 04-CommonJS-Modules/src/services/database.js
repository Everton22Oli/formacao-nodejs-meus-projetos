//export default (exportação por padrão)

exports.connectToDatabase = (dataName) => {
    console.log('se conectando ao banco: ' + dataName);
};

//export default async
exports.disconnectDatabase = async () => {
    //lógica
    console.log('Desconectando...');
}
