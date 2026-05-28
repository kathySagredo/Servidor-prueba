const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

// Permitir recibir JSON
app.use(express.json());

// Servir frontend
app.use(express.static('public'));

// Base de datos falsa
let posts = [];

// Ruta GET
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Ruta POST
app.post('/posts', (req, res) => {

    const newPost = req.body;

    posts.push(newPost);

    res.status(201).json({
        message: 'Post creado correctamente',
        post: newPost
    });

});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
