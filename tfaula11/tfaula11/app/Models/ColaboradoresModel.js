const { Model } = require('objection');

class ColaboradoresModel extends Model {
  static get tableName() {
    return 'colaboradores'; // Nome da tabela
  }

  static get idColumn() {
    return 'id'; // Coluna primária
  }

  // Adicione validações ou relacionamentos, se necessário
}

module.exports = ColaboradoresModel;
