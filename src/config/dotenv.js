const dotenv = require('dotenv');
const path = require('path');

const result = dotenv.config({ path: path.resolve(__dirname, '../../.env') });

if (result.error) {
    console.error('Erro ao carregar variáveis de ambiente:', result.error);
    process.exit(1);
}

console.log('Variáveis de ambiente carregadas com sucesso.');
console.log('DB Config:', {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  });

module.exports = {
    get: (key, defaultValue = undefined) => process.env[key] || defaultValue,
};