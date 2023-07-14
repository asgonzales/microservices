import { Request, Response } from "express";
import { Films } from "../data";
import axios from 'axios';
import { response } from "../utils/response";

export const getFilms = async (req:Request, res:Response) => {
    const dataResponse = await axios({
        method: 'GET',
        url: 'http://database:8004/data/film'
    })
    response(res, 200, dataResponse.data.data)
}