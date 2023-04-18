import express, { Express } from 'express'

import cors from 'cors'

import pokemonRouter from './router/pokemonRouter'
import rickAndMortyRouter from './router/rickAndMortyRouter'

const app: Express = express()
const port = 4000

app.use(cors())

app.use('/api/pokemons', pokemonRouter)
app.use('/api/characters', rickAndMortyRouter)

app.use('/', (_, res) => {
  res.send(
    'This is the server for the pokemon and rick and morty app, please use the /api/pokemons or /api/characters endpoints'
  )
})

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`)
})
