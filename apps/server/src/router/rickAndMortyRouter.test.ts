import { Router } from 'express'

import rickAndMortyRouter from './rickAndMortyRouter'

describe('rickAndMortyRouter', () => {
  test('should only handle GET requests to the root path', async () => {
    const app = Router()
    app.use('/api/characters', rickAndMortyRouter)

    const routes = app.stack.map((layer) => layer.regexp)
    expect(routes).toEqual([/^\/api\/characters\/?(?=\/|$)/i])
  })
})
