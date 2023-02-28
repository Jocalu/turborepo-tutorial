import { Router } from 'express'
import rickAndMortyController from '../controllers/rickAndMortyController'

const rickAndMortyRouter = () => {
  const router = Router()

  router.route('/').get(rickAndMortyController.getCharacters)

  return router
}

export default rickAndMortyRouter()
