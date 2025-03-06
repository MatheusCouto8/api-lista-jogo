import express from 'express';

const jogosRoutes = express.Router();
let jogos = [];

// Adiciona um novo jogo
jogosRoutes.post("/", (req, res) => {
  const { id, nome, genero } = req.body;

  const jogo = { id, nome, genero };
  jogos.push(jogo);

  return res.status(201).json({
    message: "Jogo adicionado com sucesso!",
    jogo,
  });
});

// Remove um jogo pelo id
jogosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um jogo pelo id no array de jogos
  const jogo = jogos.find((game) => game.id == id);

  // Verifica se o jogo foi encontrado
  if (!jogo) {
    return res
      .status(404)
      .json({ message: `Jogo com id ${id} não encontrado!` });
  }

  // Remove o jogo do array de jogos
  jogos = jogos.filter((jogo) => jogo.id != id);

  return res.status(200).json({
    message: "Jogo removido com sucesso!",
    jogo,
  });
});

export default jogosRoutes;