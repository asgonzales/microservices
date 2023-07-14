import { Request, Response } from "express";
import { response } from "../utils/response";
import axios from 'axios';

export const getPlanets = async (req:Request, res:Response) => {
    const dataResponse = await axios({
        method: 'GET',
        url: 'http://database:8004/data/planet'
    })
    response(res, 200, dataResponse.data.data)
}