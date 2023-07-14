import { Request, Response, Router } from 'express'
import { controllers } from '../controllers'



const charactersRoute = Router()

charactersRoute.get('/', controllers.getCharacters)

charactersRoute.get('/:id', controllers.getCharacterById)



export default charactersRoute