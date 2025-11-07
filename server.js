const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://projeto-simples-front.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "API PUBLICADA COM CI/CD", versao: process.env.VERSION });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
