const dotenv = require('dotenv');
const path = require('path');

const result = dotenv.config({ path: path.resolve(__dirname, '../../.env') });

if (result.error) {
    console.error('Erro ao carregar variáveis de ambiente:', result.error);
    process.exit(1);
}

console.log('Variáveis de ambiente carregadas com sucesso.');

module.exports = {
    get: (key, defaultValue = undefined) => process.env[key] || defaultValue,
};