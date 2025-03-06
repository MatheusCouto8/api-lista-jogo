import { Router } from "express";
import jogosRoutes from "./jogos.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Corinthians!" });
});

// Usando as rotas de jogos
routes.use("/jogos", jogosRoutes);

export default routes;