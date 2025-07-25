//importar arquivo com ESM (tem que especificar o tipo de arquivo pois existem dois padrões, ex: .js e .mjs*)
//importação simples
//import connectToDatabase from "./utils/database.js"
//
// connectToDatabase('my-database');
// desconnectDatabase();


// multiple import
// import * as database from "./utils/database.js"

// database.connectToDatabase('my data-base');
// database.desconnectDatabase();

//destructuring
import {connectToDatabase , desconnectDatabase , databaseType} from "./utils/database.js"

import { getDataFromApi } from "./utils/api.js"

connectToDatabase('my data-base');
desconnectDatabase();
console.log(databaseType.typeData);
console.log(databaseType.userType);
getDataFromApi();



//* arquivos .mjs utilizam esse 'm' apenas para sinalizar que são módulos a serem ulitizados.
// arquivos .mjs = arquivos no padrão ESM
// arquivos .cjs = arquivos no padrão CommonJS

//para habilitar as funções do ESM no código, precisa ser adicionado ao arquivo "package.json", a linha /"type": "module",/