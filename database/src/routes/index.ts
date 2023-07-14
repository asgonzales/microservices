import { Request, Response, Router } from "express";
import { store } from "../schemas";
import { catchedAsync } from "../utils/catchedAsync";
import { response } from "../utils/response";


const router = Router()
router.get('/:model', catchedAsync(async (req:Request, res:Response) => {
    const model = req.params.model as keyof typeof store
    
    const dataResponse = await store[model].list()

    response(res, 200, dataResponse)
}))

router.get('/:model/:id', catchedAsync(async (req:Request, res:Response) => {
    const model = req.params.model as keyof typeof store
    const id = req.params.id as string

    const dataResponse = await store[model].get(id)

    response(res, 200, dataResponse)
}))

export default router