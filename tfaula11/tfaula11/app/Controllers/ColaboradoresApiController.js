const ColaboradoresModel = require('../Models/ColaboradoresModel');

class ColaboradoresApiController {
  // Listar todos os colaboradores
  async list(req, res) {
    try {
      const colaboradores = await ColaboradoresModel.query();
      return res.json(colaboradores);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar colaboradores.' });
    }
  }

  // Obter um colaborador pelo ID
  async get(req, res) {
    try {
      const { id } = req.params;
      const colaborador = await ColaboradoresModel.query().findById(id);
      if (!colaborador) {
        return res.status(404).json({ error: 'Colaborador não encontrado.' });
      }
      return res.json(colaborador);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar colaborador.' });
    }
  }

  // Inserir um novo colaborador
  async insert(req, res) {
    try {
      const novoColaborador = await ColaboradoresModel.query().insert(req.body);
      return res.status(201).json(novoColaborador);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao inserir colaborador.' });
    }
  }
}

module.exports = new ColaboradoresApiController();
