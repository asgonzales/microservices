import { catchAsync } from "../utils/catchedAsync";
import { getPlanetById } from "./getPlanetById";
import { getPlanets } from "./getPlanets";



export const controllers = {
    getPlanets: catchAsync(getPlanets),
    getPlanetById: catchAsync(getPlanetById)
}