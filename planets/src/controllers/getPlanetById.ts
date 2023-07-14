import { Request, Response } from "express";
import axios from "axios";
import { response } from "../utils/response";

export const getPlanetById = async (req:Request, res:Response) => {
    const id = req.params.id as string
    
    const dataResponse = await axios({
        method: 'GET',
        url: `http://database:8004/data/planet/${id}`
    })
    response(res, 200, dataResponse.data.data)
}