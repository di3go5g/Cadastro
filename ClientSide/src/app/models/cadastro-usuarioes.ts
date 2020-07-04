export interface CadastroUsuarioes {
    Id: number;
    Nome: string;
    SobreNome: string;
    Email: string;
    DataNascimento: Date | string;
    Escolaridade: number | string;
}

export enum Escolaridade {
    Infantil = 1,
    Fundamental = 2,
    Médio =3,
    Superior = 4
}


