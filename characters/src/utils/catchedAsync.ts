import { NextFunction, Request, Response } from "express"


export const catchedAsync = (fn:Function) => {

    return (req:Request, res:Response, next:NextFunction) => {
        try {
            fn(req, res)
        } catch (err:any) {
            next(err)
        }
    }

}