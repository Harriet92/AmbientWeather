import Environment from "../common/config/constants/Environment";

class TestConstants {
    static DB_NAME: string = "test";
    static DB_CONNECTION_STRING: string = "mongodb://localhost:27017/test";
    static PORT: number = 4000;
    static LOG_DIRECTORY: string = "./logs/";
}

class DevConstants {
    static DB_NAME: string = "test";
    static DB_CONNECTION_STRING: string = "mongodb://localhost:27017/test";
    static PORT: number = 4000;
    static LOG_DIRECTORY: string = "./logs/";
}

class ProdConstants {
    static DB_NAME: string = "test";
    static DB_CONNECTION_STRING: string = "mongodb://localhost:27017/test";
    static PORT: number = 4000;
    static LOG_DIRECTORY: string = "./logs/";
}
Object.seal(TestConstants);
Object.seal(DevConstants);
Object.seal(ProdConstants);

module.exports = TestConstants;