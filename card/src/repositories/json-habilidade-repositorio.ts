import type {HabilidadeRepository} from "./habilidade-repository.ts";
import type {Habilidade} from "../model/habilidade-model.ts";
import habilidadesJson from "../db/seed/habilidades.json";

const jsonHabilidadeRepositorio: HabilidadeRepository = {
    findAll() {
        const habilidades: Habilidade[] = habilidadesJson.habilidades;
        return habilidades;
    }
}

export default jsonHabilidadeRepositorio;