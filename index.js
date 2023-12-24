const express = require('express');
const app = express();
const PORT = 8081;

app.use( express.json() )

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/shoes', (req, res) => {
    res.status(200).send({
        shoes: '🥾',
        size: '40'
    })
});

app.post('/shoes/:id', (req, res) => {
    
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        shoes: `🥾 with your ${logo} and ID of ${id}`,
    });
});