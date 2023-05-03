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
            <iframe src="https://www.youtube.com/embed/ermNRSmkGF8" title="Ultima Competencia Internacional Poomsae" allowfullscreen></iframe>
        </div>
        <div id="link">
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
            <table class="table table-hover" id="tabla-competidores">
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

    <div class="container-formulario border m-2 p-2 mx-auto col-sm-10" id="seccion-cuatro">
        <!-- seccion 4 -->
        <?php include __DIR__ . '/competidor/crear.php' ?>
    </div>

    <div>
        <div class="row" style="justify-content: center;" id="tarjetas">
            <!-- tarjetas de competidores, se generan con js y la función mostrar competidores -->

        </div>
    </div>

    <section id="seccion-seis">
        <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Imagen seleccionada</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<script>
    $(function() {
        let paisesPermitidos =
            <?php echo json_encode(array_column($paises, 'paisnombre')); ?>;
        $("#pais").autocomplete({
            source: paisesPermitidos
        });
    });
</script>