export class unidad_academica{
    constructor(ID_UNIDAD = null , NOMBRE = '',ID_PADRE = null, ID_TIPO = 21  , ESTADO = 1){
        this.ID_UNIDAD = ID_UNIDAD;
        this.NOMBRE = NOMBRE;
        this.ID_PADRE = ID_PADRE;
        this.ID_TIPO = ID_TIPO;
        this.ESTADO = ESTADO;
}


    ID_UNIDAD: number;
    NOMBRE : string;
    ID_PADRE : string;
    ID_TIPO : number;
    ESTADO : number;
    

}