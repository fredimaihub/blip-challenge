const express = require('express')
const app = express()
const port = 5000
const api = require('./scripts.js')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Olá, Blippers!');
})

app.get('/api/get-csharp-github-repos/:id', async (req, res) => {
    const userId = req.params.id

    try {
        const response = await api.getRepositoriesByLanguage(userId, "C#")
        res.json(response)
    
    } catch (error) {
        res.status(500).json({ message: 'Error: ' + error.message })
    }
})

app.listen(port, () => {
    console.log(`Project running in port: ${port}`)
})