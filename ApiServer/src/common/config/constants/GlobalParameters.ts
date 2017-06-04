import Environment from "./Environment";

class GlobalParameters {
    MongoPassword: string = String(process.env.MONGO_PASS).replace(" ", "");
    MongoUsername: string = String(process.env.MONGO_USERNAME).replace(" ", "");
    MongoPort: string = String(process.env.MONGO_PORT).replace(" ", "");
    MongoAddress: string = String(process.env.MONGO_ADDRESS).replace(" ", "");
    MongoDbName: string = String(process.env.MONGO_DB_NAME).replace(" ", "");
    get MongoUri() {
        //return `mongodb//${this.MongoUsername}:${this.MongoPassword}@${this.MongoAddress}:${this.MongoPort}/${this.MongoDbName}`;
        return "mongodb://admin:iy0J5q8D3KgD@ds157500.mlab.com:57500/ambientweatherdb";
    }
}

export default new GlobalParameters();