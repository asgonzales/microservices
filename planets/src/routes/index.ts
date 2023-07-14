import { Router } from 'express';
import { controllers } from '../controllers';



const planetsRoute = Router()

planetsRoute.get('/', controllers.getPlanets)

planetsRoute.get('/:id', controllers.getPlanetById)

export default planetsRoute