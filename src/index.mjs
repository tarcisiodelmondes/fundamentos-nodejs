import express from "express";

const app = express();
app.use(express.json());

/**
 * GET - Buscar uma informação no servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação especifica no servidor
 * DELETE - Deletar uma informação no servidor
 */

/**
 * Router Params => Indentificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Params => Os objetos inserção / alteração (JSON)
 */

app.get("/courses", (req, res) => {
  const query = req.query;

  console.log(query);
  return res.json(["Curso 1", "Curso 2"]);
});

app.post("/courses", (req, res) => {
  const body = req.body;

  console.log(body);
  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.put("/courses/:id", (req, res) => {
  const params = req.params;

  console.log(params);
  return res.json(["Curso 5", "Curso 7", "Curso 3"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 5", "Curso 7", "Curso 1"]);
});

app.delete("/courses/:id", (req, res) => {
  return res.json(["Curso 7", "Curso 1"]);
});

app.listen(3333, () => console.log("http://localhost:3333"));
