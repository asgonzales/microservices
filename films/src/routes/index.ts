import { Router } from 'express';
import { controllers } from '../controllers';

const filmsRoute = Router();

filmsRoute.get('/', controllers.getFilms)

filmsRoute.get('/:id', controllers.getFilmById)

export default filmsRoute