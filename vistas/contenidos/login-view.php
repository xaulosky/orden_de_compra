<div class="bg-gradient-primary vh-100">

    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Bienvenido</h1>
                                    </div>
                                    <form class="user" action="" method="POST" autocomplete="off">
                                        <div class="form-group">
                                            <input type="text" class="form-control form-control-user" id="usuario" name="usuario_log" placeholder="Nombre de usuario">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Clave" name="clave_log">
                                        </div>

                                        <input type="submit" value="Iniciar Sesión" class="btn btn-primary btn-user btn-block">

                                        <hr>

                                    </form>

                                    <div class="text-center">
                                        <a class="small" href="">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="">Create an Account!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>



</div>

<?php
if (isset($_POST["usuario_log"]) && isset($_POST["clave_log"])) {
    require_once "./controladores/loginControlador.php";
    $ins_login = new loginControlador();
    echo $ins_login->iniciar_sesion_controlador();
}
?>