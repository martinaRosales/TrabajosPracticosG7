<a href="/competidor/crear" class="btn btn-success m-5">Nuevo Competidor</a>


<div class="overflow-auto m-5">
    <h2>Competidores</h2>
    <table class="competidores table table-striped">
        <thead>
            <tr>
                <th>Legajo</th>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>DU</th>
                <th>Fecha Nacimiento</th>
                <th>Pais</th>
                <th>Graduacion</th>
                <th>Clasificacion General</th>
                <th>Email</th>
                <th>Genero</th>
            </tr>
        </thead>

        <tbody> <!-- Mostrar los Resultados -->
            <?php foreach ($competidor as $competidores) : ?>
                <tr>
                    <td><?php echo $competidores->gal; ?></td>
                    <td><?php echo $competidores->apellido; ?></td>
                    <td><?php echo $competidores->nombre; ?></td>
                    <td><?php echo $competidores->du; ?></td>
                    <td><?php echo $competidores->fecha_nacimiento; ?></td>
                    <td><?php echo $competidores->pais; ?></td>
                    <td><?php echo $competidores->graduacion; ?></td>
                    <td><?php echo $competidores->clasificacion_general; ?></td>
                    <td><?php echo $competidores->email; ?></td>
                    <td><?php echo $competidores->genero; ?></td>
                    <td>
                        <form method="POST" action="competidor/eliminar" class="w-100">
                            <input type="hidden" name="id" value="<?php echo $competidores->legajo; ?>">
                            <input type="hidden" name="tipo" value="propiedad">
                            <input type="submit" class="btn btn-danger" value="Eliminar">
                        </form>

                        <a href="propiedades/actualizar?id=<?php echo $competidores->legajo; ?>" class="btn btn-warning">Actualizar</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>