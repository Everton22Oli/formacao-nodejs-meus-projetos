const databaseType = {
    userType: 'admin',
    typeData: 'datalocal',
};

async function connectToDatabase(dataName) {
    //lógica de conexão
    console.log(`Conectando ao banco de dados ${dataName}`);
    
};

async function desconnectDatabase() {
    console.log("desconectando do bando de dados...");    
};

//multiple exports
export {connectToDatabase, desconnectDatabase, databaseType};

//exportação por padrão
// export default connectToDatabase;


