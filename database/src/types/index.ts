import { Model } from 'mongoose';
export interface ICharacter {
    _id: string
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: String
    films: String[]
}
export interface ICharacterModel extends Model<ICharacter> {
    list(): Promise<ICharacter[]>
    get(id:string): Promise<ICharacter>
    insert(): Promise<ICharacter>
}

export interface IPlanet {
    _id: string
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    residents: String[]
    films: String[]
}
export interface IPlanetModel extends Model<IPlanet> {
    list(): Promise<IPlanet[]>
    get(id:string): Promise<IPlanet>
    insert(): Promise<IPlanet>
}

export interface IFilm {
    _id: string
    title: string
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    characters: String[]
    planets: String[]
}
export interface IFilmModel extends Model<IFilm> {
    list(): Promise<IFilm[]>
    get(id:string): Promise<IFilm>
    insert(): Promise<IFilm>
}