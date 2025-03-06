import express from 'express';

const jogosRoutes = express.Router();
let jogos = [];

//Rota pra teste 
jogosRoutes.get("/", (req, res) => {
    return res.status(200).json({ message: "Bem-vindo ao sistema de gerenciamento de jogos!" });
});

//listar os jogos
jogosRoutes.get("/items", (req, res) => {
    return res.status(200).json(jogos);
});

//add um novo jogo
jogosRoutes.post("/items", (req, res) => {
    const { id, nome, genero, plataforma } = req.body;

    const jogo = { id, nome, genero, plataforma };
    jogos.push(jogo);

    return res.status(201).json({
    message: "Jogo adicionado com sucesso!",
    jogo,
    });
});



export default jogosRoutes;