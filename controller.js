const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models/user');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/create', async (req, res) => {
  try {
    const newUser = await model.user.create({
      nome: req.body.nomeUser,
      senha: req.body.senhaUser,
      email: req.body.emailUser,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    if (newUser) {
      res.send(JSON.stringify('O usuário foi cadastrado com sucesso!'));
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(JSON.stringify('Ocorreu um erro ao cadastrar o usuário.'));
  }
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Servidor rodando na porta', port);
});