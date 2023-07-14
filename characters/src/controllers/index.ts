import { catchedAsync } from "../utils/catchedAsync";
import { getCharacterById } from "./getCharacterById";
import { getCharacters } from "./getCharacters";


export const controllers = {
    getCharacters: catchedAsync(getCharacters),
    getCharacterById: catchedAsync(getCharacterById)
}