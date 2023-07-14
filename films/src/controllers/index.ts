import { catchedAsync } from "../utils/catchedAsync";
import { getFilmById } from "./getFilmById";
import { getFilms } from "./getFilms";

export const controllers = {
    getFilms: catchedAsync(getFilms),
    getFilmById: catchedAsync(getFilmById)
}