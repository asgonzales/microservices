import mongoose from 'mongoose';
import { ICharacter, ICharacterModel } from '../types';


export const characterSchema = new mongoose.Schema<ICharacter, ICharacterModel>({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    height: {
        type: String
    },
    mass: {
        type: String
    },
    hair_color: {
        type: String
    },
    skin_color: {
        type: String
    },
    eye_color: {
        type: String
    },
    birth_year: {
        type: String
    },
    gender: {
        type: String
    },
    homeworld: {
        type: String,
        ref: "Planet"
    },
    films: [{
        type: String,
        ref: "Film"
    }],
})

characterSchema.statics.list = async function() {
    return this.find().populate('homeworld', ['_id', 'name']).populate('films', ['_id', 'title'])
}

characterSchema.statics.get = async function(id:string) {
    return this.findById(id).populate('homeworld', ['_id', 'name']).populate('films', ['_id', 'title'])
}

characterSchema.statics.insert = async function(character:ICharacter) {
    const char = await this.create(character)
    return char
}