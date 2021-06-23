export class Nivellogro{
    constructor(id_criterio = null , id_nivel = null , descripcion = ''){
        this.id_criterio = id_criterio;
        this.id_nivel = id_nivel;
        this.descripcion = descripcion;   
}
    id_criterio : number;
    id_nivel : number;
    descripcion : string;
}