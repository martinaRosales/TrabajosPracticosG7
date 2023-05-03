// export{Competidor}
class Competidor{
    constructor(objeto){
        this.gal = objeto.gal;
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

    //get y set 
    getGal(){
      return this.gal
    }
    setGal(gal){
      this.gal = gal 
    }

    getApellido(){
      return this.apellido
    }
    setApellido(apellido){
      this.apellido = apellido 
    }

    getNombre(){
      return this.nombre
    }
    setNombre(nombre){
      this.nombre = nombre 
    }

    getDu(){
      return this.du
    }
    setDu(du){
      this.du = du 
    }

    getFechaNac(){
      return this.fechaNac
    }
    setFechaNac(nacimiento){
      this.fechaNac = nacimiento 
    }

    getPais(){
      return this.pais
    }
    setPais(pais){
      this.pais = pais 
    }

    getGraduacion(){
      return this.graduacion
    }
    setGraduacion(graduacion){
      this.graduacion = graduacion 
    }

    getClasificacion(){
      return this.clasificacionGenNac
    }
    setClasificacion(clasificacionGenNac){
      this.clasificacionGenNac = clasificacionGenNac 
    }

    getEmail(){
      return this.email
    }
    setEmail(email){
      this.email = email 
    }

    getGenero(){
      return this.genero
    }
    setGenero(genero){
      this.genero = genero 
    }

    
    toString(){
      return `Gal: ${this.getGal()} 
              Apellido y Nombre: ${this.getApellido() + " " +this.getNombre()} 
              DU: ${this.getDu()}
              Nacimiento: ${this.getFechaNac()}
              Pais: ${this.getPais()}
              Graduacion: ${this.getGraduacion()}
              Clasificacion: ${this.getClasificacion()}
              Email: ${this.getEmail()}
              Genero: ${this.getGenero()}`;
    }

    
}


