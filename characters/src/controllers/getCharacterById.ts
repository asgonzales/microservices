import { Response, Request } from "express";
import axios from "axios";
import { response } from "../utils/response";



export const getCharacterById = async (req:Request, res:Response) => {
    const id = req.params.id as string
    const dataResponse = await axios({
        method: 'GET',
        url: `http://database:8004/data/character/${id}`
    })
    response(res, 200, dataResponse.data.data)
}