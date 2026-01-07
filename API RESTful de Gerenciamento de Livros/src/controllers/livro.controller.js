const Livro = require("../models/Livro");

// GET - listar livros
exports.listar = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao listar livros" });
  }
};

// POST - criar livro
exports.criar = async (req, res) => {
  const { titulo, autor, anoPublicacao, genero } = req.body;

  if (!titulo || !autor || !anoPublicacao || !genero) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios"
    });
  }

  try {
    const livro = await Livro.create(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar livro" });
  }
};

// PUT - atualizar livro
exports.atualizar = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }

    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar livro" });
  }
};

// DELETE - remover livro
exports.remover = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);

    if (!livro) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }

    res.status(200).json({ mensagem: "Livro removido com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao remover livro" });
  }
};
