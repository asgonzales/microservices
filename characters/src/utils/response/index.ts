import { Response } from "express"
export const response = (res:Response, status:number, data:any) => {
    res.status(status).json({
        status,
        data,
    })
}