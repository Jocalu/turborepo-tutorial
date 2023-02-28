import { Router } from 'express'
import pokemonController from '../controllers/pokemonController'

const pokemonRouter = () => {
  const router = Router()

  router.route('/').get(pokemonController.getPokemons)

  return router
}

export default pokemonRouter()
