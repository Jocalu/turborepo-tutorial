import { Request, Response } from 'express'

import rickAndMortyController from './rickAndMortyController'
import { characters } from '../db/rickAndMortyCharacters.json'

const { getCharacters } = rickAndMortyController

const res = {
  json: jest.fn() as jest.Mock,
  status: jest.fn().mockReturnThis(),
  send: jest.fn()
} as unknown as Response

const req = {} as unknown as Request

describe('getCharacters', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  test('should return a json with a list of pokemons', () => {
    getCharacters(req, res)

    expect(res.json).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith(characters)
  })

  test('should return a 500 status code if an error occurs', () => {
    ;(res.json as any).mockImplementationOnce(() => {
      throw new Error('An error occurred')
    })

    getCharacters(req, res)

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(500)
  })
})
