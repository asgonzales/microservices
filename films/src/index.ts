import express, { Response } from 'express';
import morgan from 'morgan'
import filmsRoute from './routes'
import { ClientError } from './utils/errors';

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use('/', filmsRoute)

server.use('*', (_, __) => {
    throw new ClientError('Not found', 404)
})

server.use((err:any, _:any, res:Response, __:any ) => {
    res.status(err.statusCode || 500).json({ status: err.statusCode || 500, error: err.message })
})

server.listen(8003, () => console.log('server listening at 8003'))