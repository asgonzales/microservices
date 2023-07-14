import charactersRoute from "./routes";
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import { response } from "./utils/response";
import { ClientError } from "./utils/errors";

const server = express()

server.use(express.json());
server.use(morgan('dev'))

server.use('/', charactersRoute)

server.use('*', (req:Request, res:Response) => {
    throw new ClientError('Not found', 404)
})

server.use((err:any, _:Request, res:Response, __:NextFunction) => {
    res.status(err.statusCode || 500).json({ status: err.statusCode || 500, error: err.message })
})

server.listen(8001, () => {
    console.log('listen at port 8001')
})