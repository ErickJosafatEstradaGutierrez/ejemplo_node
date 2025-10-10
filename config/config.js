const dotenv = require('dotenv');

dotenv.config();

const { NODE_ENV, PORT, SECRET_KEY, SECRET_IV, ECNRYPTION_METHOD } = process.env;

// Fix the typo in encryption_method
const config = {
    env: NODE_ENV,
    port: PORT,
    secret_key: SECRET_KEY,
    secret_iv: SECRET_IV,
    encryption_method: ECNRYPTION_METHOD, // Fixed typo here
};

module.exports = config;