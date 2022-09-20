const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
require('./src/models/connection');

const admin_router = require('./src/routes/adminRouter');
const usuario_router = require('./src/routes/usuarioRouter');
const pregunta_router = require('./src/routes/preguntaRouter');
const respuesta_router = require('./src/routes/respuestaRouter');
const categoria_router = require('./src/routes/categoriaRouter');
const like_router = require('./src/routes/likeRouter');
const dislike_router = require('./src/routes/dislikeRouter');
const favorito_router = require('./src/routes/favoritoRouter');
const preguntas_mas_likes_router = require('./src/routes/preguntas_mas_likesRouter');
const preguntas_mas_dislikes_router = require('./src/routes/preguntas_mas_dislikesRouter');
const categorias_mas_preguntas_router = require('./src/routes/categorias_mas_preguntasRouter');
const mes_mas_registros_router = require('./src/routes/mes_mas_registrosRouter');
const mesmaspreguntas_router = require('./src/routes/mes_mas_preguntasRouter');
app.use(bodyParser.json());
//preguntas_mas_likes categorias_mas_preguntas mes_mas_registros mes_mas_preguntas
app.get('/', (req, res) => {
    res.send("Api is siuuuuuuuuuuuu");
}); 


app.use('/api',admin_router);
app.use('/api',usuario_router);
app.use('/api',pregunta_router);
app.use('/api',respuesta_router);
app.use('/api',categoria_router);
app.use('/api',like_router);
app.use('/api',dislike_router);
app.use('/api',favorito_router);
app.use('/api',preguntas_mas_likes_router);
app.use('/api',categorias_mas_preguntas_router);
app.use('/api',mes_mas_registros_router);
app.use('/api',mesmaspreguntas_router);
app.use('/api',preguntas_mas_dislikes_router);

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
})