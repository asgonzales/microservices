import mongoose from 'mongoose';
import { IFilm, IFilmModel } from '../types';

export const filmSchema = new mongoose.Schema<IFilm, IFilmModel>({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    opening_crawl: {
        type: String
    },
    director: {
        type: String
    },
    producer: {
        type: String
    },
    release_date: {
        type: String
    },
    characters: [{
        type: String,
        ref: 'Character'
    }],
    planets: [{
        type: String,
        ref: 'Planet'
    }],
})

filmSchema.statics.list = async function() {
    return this.find().populate('characters', ['_id', 'name']).populate('planets', ['_id', 'name'])
}

filmSchema.statics.get = async function(id:string) {
    return this.findById(id).populate('characters', ['_id', 'name']).populate('planets', ['_id', 'name'])
}

filmSchema.statics.insert = async function(film:IFilm) {
    const newFilm = await this.create(film)
    return newFilm    
}