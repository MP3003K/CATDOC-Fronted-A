export class Criterio{
    constructor(id_rubricas = null , nombre = null , peso = null){
        this.id_rubricas = id_rubricas;
        this.nombre = nombre;
        this.peso = peso;   
}
    id_rubricas : number;
    nombre : string;
    peso : number;
}