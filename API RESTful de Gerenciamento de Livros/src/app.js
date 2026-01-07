require("dotenv").config();
const express = require("express");
const connectDatabase = require("./config/database");
const livroRoutes = require("./routes/livro.routes");

const app = express();

app.use(express.json());
connectDatabase();

app.use("/api", livroRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
