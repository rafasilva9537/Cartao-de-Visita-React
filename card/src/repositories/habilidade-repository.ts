import type {Habilidade} from "../model/habilidade-model.ts";

export interface HabilidadeRepository {
    findAll: () => Habilidade[]
}