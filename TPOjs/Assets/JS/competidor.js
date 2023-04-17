class Competidor{
    constructor(objeto){
        this.legajo = objeto.legajo;
        this.apellido = objeto.apellido;
        this.nombre = objeto.nombre;
        this.du = objeto.du;
        this.fechaNac = objeto.fechaNac;
        this.pais = objeto.pais;
        this.graduacion = objeto.graduacion;
        this.clasificacionGenNac = objeto.clasificacionGenNac;
        this.email = objeto.email;
        this.genero = objeto.genero;
    }

    //se retorna un obj de la clase competidor con todos sus datos 
    perfil(){
        let objCompetidor = {
            legajo: this.legajo,
            apellido: this.apellido,
            nombre: this.nombre,
            du : this.du,
            fechaNac: this.fechaNac,
            pais: this.pais,
            graduacion: this.graduacion,
            clasificacionGenNac: this.clasificacionGenNac,
            email: this.email,
            genero: this.genero,
        }
        return objCompetidor
    }
    

  

}