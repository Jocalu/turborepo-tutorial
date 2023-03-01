import { Router } from 'express'

import pokemonRouter from './pokemonRouter'

describe('pokemonRouter', () => {
  test('should only handle GET requests to the root path', async () => {
    const app = Router()
    app.use('/api/pokemons', pokemonRouter)

    const routes = app.stack.map((layer) => layer.regexp)
    expect(routes).toEqual([/^\/api\/pokemons\/?(?=\/|$)/i])
  })
})
