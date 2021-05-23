<div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Crear una Cuenta!</h1>
                        </div>
                        <form class="user FormularioAjax" action="<?php echo SERVERURL; ?>ajax/usuarioAjax.php" method="POST" data-form="save" autocomplete="off">
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="nombre" placeholder="Nombre" pattern="[a-zA-Z]{1,20}" name="usuario_nombre_reg">
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control form-control-user" id="apellido" placeholder="Apellido" name="usuario_apellido_reg">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control form-control-user" id="email" placeholder="Correo electronico" name="usuario_email_reg">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-user" id="rut" placeholder="Rut" name="usuario_rut_reg">
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="usuario" placeholder="Nombre de usuario" name="usuario_usuario_reg">
                                </div>
                                <div class="col-sm-6">
                                    <!-- <select class="form-select" aria-label="Default select example" name="usuario_estado_reg">
                                        <option selected>Estado</option>
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select> -->

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="usuario_estado_reg" id="usuario_estado_reg1" value="Activo" checked>
                                        <label class="form-check-label" for="usuario_estado_reg1">
                                            Activo
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="usuario_estado_reg" id="usuario_estado_reg2" value="Inactivo">
                                        <label class="form-check-label" for="usuario_estado_reg2">
                                            Inactivo
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" class="form-control form-control-user" id="clave1" placeholder="Contraseña" name="usuario_clave1_reg">
                                </div>
                                <div class="col-sm-6">
                                    <input type="password" class="form-control form-control-user" id="clave2" placeholder="Repite Contraseña" name="usuario_clave2_reg">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="usuario_privilegio_reg" id="usuario_estado_reg1" value="1" checked>
                                    <label class="form-check-label" for="usuario_privilegio_reg1">
                                        Admin
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="usuario_privilegio_reg" id="usuario_estado_reg2" value="2">
                                    <label class="form-check-label" for="usuario_privilegio_reg2">
                                        Editor
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="usuario_privilegio_reg" id="usuario_estado_reg3" value="3">
                                    <label class="form-check-label" for="usuario_privilegio_reg3">
                                        Vistas
                                    </label>
                                </div>
                            </div>
                            <input type="submit" class="btn btn-primary btn-user btn-block" value="Registar usuario">

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>