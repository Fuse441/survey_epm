const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://myServer:myPassword@cluster0.dwefd.mongodb.net/';
const client = new MongoClient(url);

const dbName = 'epm';

export async function ConnectMongo(collec:string) {
 
  await client.connect();
  //console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection(collec);


  return collection;
}

