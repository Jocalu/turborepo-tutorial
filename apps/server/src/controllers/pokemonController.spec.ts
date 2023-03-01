import { Request, Response } from 'express'
import { describe, expect, test, jest, beforeEach } from '@jest/globals'

import pokemonController from '../controllers/pokemonController'
import { pokemons } from '../db/pokemons.json'

const { getPokemons } = pokemonController

const res = {
  json: jest.fn(),
  status: jest.fn().mockReturnThis(),
  send: jest.fn()
} as unknown as Response

const req = {} as unknown as Request

describe('getPokemons', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  test('should return a json with a list of pokemons', () => {
    getPokemons(req, res)

    expect(res.json).toHaveBeenCalledTimes(1)
    expect(res.json).toHaveBeenCalledWith(pokemons)
  })

  test('should return a 500 status code if an error occurs', () => {
    res.json.mockImplementationOnce(() => {
      throw new Error('An error occurred')
    })

    getPokemons(req, res)

    expect(res.status).toHaveBeenCalledTimes(1)
    expect(res.status).toHaveBeenCalledWith(500)
  })
})
