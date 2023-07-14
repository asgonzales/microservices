import mongoose from 'mongoose';
import { config } from './config/config';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import router from './routes';
import { ClientError } from './utils/errors';

mongoose.connect(config.MONGO_URI)
.then(res => console.log('connected to db'))
.catch(err => console.log(err))


const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/data', router)

app.use('*', () => {
    throw new ClientError('Not found', 404)
})

app.use((err:any, _:Request, res:Response, __:NextFunction) => {
    res.status(err.statusCode || 500).json({ status: err.statusCode || 500, error: err.message })
})

export default app