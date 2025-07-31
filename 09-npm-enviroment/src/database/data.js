async function connectToDatabase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log("Conexão com o banco de dados estabelecida")
    }else{
        console.log("Não foi possível conectar ao banco de dados, falha de login")
    };
}

export default connectToDatabase;