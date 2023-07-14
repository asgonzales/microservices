import mongoose from 'mongoose';
import { IPlanet, IPlanetModel } from '../types'


export const planetSchema = new mongoose.Schema<IPlanet, IPlanetModel>({
    _id: {
        type: String,
    },
    name: {
        type: String,
    },
    rotation_period: {
        type: String,
    },
    orbital_period: {
        type: String,
    },
    diameter: {
        type: String,
    },
    climate: {
        type: String,
    },
    gravity: {
        type: String,
    },
    terrain: {
        type: String,
    },
    surface_water: {
        type: String,
    },
    residents: [{
        type: String,
        ref: 'Character'
    }],
    films: [{
        type: String,
        ref: 'Film'
    }],
})

planetSchema.statics.list = async function() {
    return await this.find().populate('residents', ['_id', 'name']).populate('films', ['_id', 'title'])
}

planetSchema.statics.get = async function(id:string) {
    return await this.findById(id).populate('residents', ['_id', 'name']).populate('films', ['_id', 'title'])
}

planetSchema.statics.insert = async function(planet:IPlanet) {
    const newPlanet = await this.create(planet)
    return newPlanet
}