import { type Request, type Response } from 'express'
import { characters } from '../db/rickAndMortyCharacters.json'

const rickAndMortyController = () => {
  const getCharacters = (_: Request, res: Response) => {
    try {
      return res.json(characters)
    } catch (error) {
      res.status(500)
      res.send(error)
    }
  }

  return {
    getCharacters
  }
}

export default rickAndMortyController()
