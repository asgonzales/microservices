import express, { Response } from 'express';
import morgan from 'morgan';
import planetsRoute from './routes';
import { ClientError } from './utils/error';


const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use('/', planetsRoute)

server.use('*', () => {
    throw new ClientError('NotFound', 404)
})

server.use((err:any, _:any, res:Response, __:any) => {
    res.status(err.statusCode || 500).json({ status: err.statusCode || 500, error: err.message })
})

server.listen(8002, () => {
    console.log('listen at 8002')

})