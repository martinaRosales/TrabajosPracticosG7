
<br>
    <div class="container">
      <div class="row" style="justify-content: center" id="seccion-uno">
        <!-- seccion 1 Timer -->
      </div>
<br>
      <div class="row text-center border m-2 p-4 mx-auto col-sm-10" style="justify-content: center" id="seccion-dos">
        <!-- seccion 2 Video -->
        <h2>Ultima Competencia Internacional Taekwondo WTF</h2> <br>
        <div class="ratio" style="--bs-aspect-ratio: 50%;" id="video">
          <iframe  src="https://www.youtube.com/embed/ermNRSmkGF8"
          title="Ultima Competencia Internacional Poomsae"  
          allowfullscreen></iframe>
        </div>
        <div id="link" >
          <a href="https://youtu.be/ermNRSmkGF8">Link Video en YouTube</a>
        </div>
      </div>
<br>
<div class="row" style="justify-content: center" id="seccion-tres">
    <!-- seccion 3 -->
    <!-- <label for="filtro-tabla" class="col-sm-4 col-form-label"
>Filtro de búsqueda</label
> -->
    <div class="filtros-tabla col-lg-3 mb-3">
        <!-- Filtro de busqueda para la tabla -->
       <div class="col-sm-12">
        <select id="filtro-select" class="form-select" aria-label="Default select example">
            <option selected value="default">Buscar según</option>
            <option value="nombre">Nombre</option>
            <option value="apellido">Apellido</option>
            <option value="pais">País</option>
        </select>
       </div>
       <div class="col-sm-6">
        <input type="text" class="form-control ms-2" id="filtro-busqueda" name="filtro-busqueda" />
       </div>
       <div class="col-sm-6">
        <button type="submit" class="btn ms-2" id="boton-select">Go</button>
       </div>

    </div>
   <div class="table-responsive">  
    <table class="table table-hover">
        <thead>
            <tr class="table-header">
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Género</th>
                <th>País</th>
                <th>Graduación</th>
                <th>Clasificación</th>
                <th>GAL</th>
            </tr>
        </thead>
        <tbody id="table-body">

        </tbody>
    </table>
   </div>
   
</div>
<br>
<div class="container-formulario border m-2 p-2 mx-auto col-sm-10" id="seccion-cuatro">
            <!-- seccion 4 -->

            <h1>Formulario de registro</h1>
            <form id="formulario">
                <div class="contenedor">
                    <div class="progreso-contenedor">
                        <div class="progreso" id="progreso"></div>
                        <div class="circle active">1</div>
                        <div class="circle">2</div>
                        <div class="circle">3</div>
                    </div>
                </div>
                <div class="formulario active">
                    <div class="row mb-3">
                        <label for="nombre" class="col-sm-4 col-form-label">Nombre</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="nombre" name="nombre" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="apellido" class="col-sm-4 col-form-label">Apellido</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="apellido" name="apellido" />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="du" class="col-sm-4 col-form-label">DU</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="du" name="du" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="fecha-nacimiento" class="col-sm-4 col-form-label">Fecha de nacimiento</label>
                        <div class="col-sm-8">
                            <input type="date" class="form-control" id="fecha-nacimiento" name="fecha-nacimiento"
                                min="1960-01-01" />
                        </div>
                    </div>
                </div>
                <div class="formulario">
                    <div class="row mb-3">
                        <label for="pais" class="col-sm-4 col-form-label">País de origen</label>
                        <div class="col-sm-8">
                            <input class="form-control" id="pais" name="pais" />
                            <div id="autocomplete-suggestions" class="autocomplete-suggestions"></div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="col-sm-4 col-form-label">Email de contacto</label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="email" name="email" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="genero" class="col-sm-4 col-form-label">Género</label>
                        <div class="col-sm-8">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="genero" id="femenino"
                                    value="Femenino" />
                                <label class="form-check-label" for="femenino">
                                    Femenino
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="genero" id="masculino"
                                    value="Masculino" />
                                <label class="form-check-label" for="masculino">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="formulario">
                    <div class="row mb-3">
                        <label for="gal" class="col-sm-4 col-form-label">GAL</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="gal" name="gal" placeholder="Ej: ABC1234567" />
                            <!-- <span id="gal-error" style="display: none"
                  >El GAL debe tener 9 caracteres, los primeros 3 letras y los
                  restantes números (Ej: ABC1234567)</span
                > -->
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="graduacion" class="col-sm-4 col-form-label">Graduación</label>
                        <div class="col-sm-8">
                            <select class="form-select" id="graduacion" name="graduacion">
                                <option value="">Seleccione una graduación</option>
                                <option value="1ro GUP">1ro GUP</option>
                                <option value="2do GUP">2do GUP</option>
                                <option value="3ro GUP">3ro GUP</option>
                                <option value="4to GUP">4to GUP</option>
                                <option value="5to GUP">5to GUP</option>
                                <option value="6to GUP">6to GUP</option>
                                <option value="7mo GUP">7mo GUP</option>
                                <option value="8vo GUP">8vo GUP</option>
                                <option value="9no GUP">9no GUP</option>
                                <option value="10mo GUP">10mo GUP</option>
                                <option value="1er DAN">1er DAN</option>
                                <option value="2do DAN">2do DAN</option>
                                <option value="3er DAN">3er DAN</option>
                                <option value="4to DAN">4to DAN</option>
                                <option value="5to DAN">5to DAN</option>
                                <option value="6to DAN">6to DAN</option>
                                <option value="7mo DAN">7mo DAN</option>
                                <option value="8vo DAN">8vo DAN</option>
                                <option value="9no DAN">9no DAN</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="clasificacion" class="col-sm-4 col-form-label">Clasificación general del ranking
                            nacional</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="clasificacion" name="clasificacion"
                                placeholder="Ingrese su posición en el ranking nacional" pattern="^\S+$" required />
                        </div>
                    </div>
                </div>
                <button class="boton btn btn-secondary" id="anterior" disabled>Anterior</button>
                <button class="boton btn btn-secondary" id="siguiente">Siguiente</button>
                <button id='enviarBtn' type="button" class="btn text-light" style="display: none">
                    Enviar
                </button>
            </form>
            <!-- <div
          id="envio"
          class="alert alert-danger mt-3"
          style="display: none"
          role="alert"
        ></div>
      </div>
                <button type="submit" class="btn text-light">Enviar</button>
            </form> -->
            <div id="envio" class="btn alert alert-danger mt-3" style="display:none;" role="alert"></div>


        </div>

        <div class="row" style="justify-content: center;" id="tarjetas"> 
            <!-- tarjetas de competidores, se generan con js y la función mostrar competidores -->
        </div>  
    </div>
