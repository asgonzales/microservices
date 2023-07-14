import { Request, Response } from 'express';
import { response } from '../utils/response';
import { Characters } from '../data';
import axios from 'axios';

export const getCharacters = async (req:Request, res:Response) => {
   const dataResponse = await axios( {
      method: 'GET',
      url: 'http://database:8004/data/character'
   })
   response(res, 200, dataResponse.data.data)
}
