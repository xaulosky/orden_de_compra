<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?php echo COMPANY; ?></title>
    <!-- Custom styles for this template-->
    <?php include "./vistas/inc/Link.php"; ?>

</head>

<body>
    <?php
    $peticionAjax = false;
    require_once "./controladores/vistasControlador.php";
    session_start(['name' => 'OC']);

    $IV = new vistasControlador();

    $vistas = $IV->obtener_vistas_controlador();
    if (!isset($_SESSION["token_oc"])) {
        include "./vistas/inc/Scripts.php";
        include "./vistas/contenidos/login-view.php";
    }
    if ($vistas == "login" && isset($_SESSION["token_oc"])) {
        header("Location:home");
    }

    if ($vistas == "404" || $vistas == "login") {
        include "./vistas/contenidos/" . $vistas . "-view.php";
    } else {

        require_once "./controladores/loginControlador.php";
        $lc = new loginControlador();

        if (!isset($_SESSION["token_oc"])) {
            echo $lc->forzar_cierre_sesion_controlador();
            exit();
        }

    ?>
        <div class="d-flex" id="content-wrapper">
            <!-- sideBar -->
            <?php include "./vistas/inc/NavLateral.php"; ?>
            <!-- fin sideBar -->

            <div class="w-100">

                <!-- Navbar -->
                <?php include "./vistas/inc/NavBar.php"; ?>
                <!-- Fin Navbar -->
                <?php include $vistas; ?>

            </div>
        </div>

    <?php
    }
    include "./vistas/inc/Scripts.php";
    ?>

</body>

</html>