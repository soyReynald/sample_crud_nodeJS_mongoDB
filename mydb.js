var MongoClient = require('mongodb').MongoClient;

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://soyreynald:process.env.PASSWORD@resourcescluster.e3fwh.mongodb.net/?retryWrites=true&w=majority&appName=ResourcesCluster";
 

    const client = new MongoClient(uri);
 
    async function listDatabases(client){
        var databasesList = await client.db().admin().listDatabases();
     
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));

        console.log("\n");
        console.log("Conexion successful");
    };


    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);