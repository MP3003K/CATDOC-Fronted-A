export class tipo_academica{
    constructor(ID_TIPO_UNIDAD = null , NOMBRE = '', ESTADO = 1){
            this.ID_TIPO_UNIDAD = ID_TIPO_UNIDAD;
            this.NOMBRE = NOMBRE;
            this.ESTADO = ESTADO;
    }
    ID_TIPO_UNIDAD: number;
    NOMBRE : string;
    ESTADO:number;


}