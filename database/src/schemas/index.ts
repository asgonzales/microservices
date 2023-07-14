import mongoose from "mongoose"
import { ICharacter, ICharacterModel, IFilm, IFilmModel, IPlanet, IPlanetModel } from "../types"
import { characterSchema } from "./characterSchema"
import { filmSchema } from "./filmSchema"
import { planetSchema } from "./planetSchema"


export const store = {
    character: mongoose.model<ICharacter, ICharacterModel>('Character', characterSchema),
    film: mongoose.model<IFilm, IFilmModel>('Film', filmSchema),
    planet: mongoose.model<IPlanet, IPlanetModel>('Planet', planetSchema)

}