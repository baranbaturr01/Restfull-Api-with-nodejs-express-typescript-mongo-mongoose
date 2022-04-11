import dotenv from 'dotenv';
dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    keepAlive: true,
    autoIndex: false, // Don't build indexes
    retryWrites: false, // Fail writes if unable to connect to MongoDB
}

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'username'
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'test'
const MONGO_HOST = process.env.MONGO_HOST || 'localhost' //bunlar sadece daha sonra kullanılacak diye yazıldı

const MONGO = {
    options: MONGO_OPTIONS,
    url: `mongodb://127.0.0.1:27030/test`,
}


const SERVER_PORT = process.env.SERVER_PORT || 3007;
const SERVER_HOST = process.env.SERVER_HOST || 'localhost';


const SERVER = {
    hostname: SERVER_HOST,
    port: SERVER_PORT
};
const config = {
    mongo: MONGO,
    server: SERVER
};
export default config;
