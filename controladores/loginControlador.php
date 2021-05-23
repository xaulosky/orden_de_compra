<?php
if ($peticionAjax) {
    require_once "../modelos/loginModelo.php";
} else {
    require_once "./modelos/loginModelo.php";
}

class loginControlador extends loginModelo
{
    /* Controlador iniciar sesion */
    public static function iniciar_sesion_controlador()
    {
        $usuario = mainModel::limpiar_cadena($_POST["usuario_log"]);
        $clave = mainModel::limpiar_cadena($_POST["clave_log"]);

        /* Comprobar campos vacios */
        if ($usuario == "" || $clave == "") {
            echo '
            <script>  
            document.addEventListener("DOMContentLoaded", ()=>{

                Swal.fire({
                title:"Ocurrio un error inesperado",
                text: "No has llenado todos los campos",
                type: "error",
                confirmButtonText: "Aceptar"
            });
        });
            </script>';
            exit();
        }
        /* Verificar integridad de los datos */
        /*  if (mainModel::verificar_datos("[a-zA-Z0-9]{1,35w}", $usuario)) {
            echo '
            <script>  
            document.addEventListener("DOMContentLoaded", ()=>{

                Swal.fire({
                title:"Ocurrio un error inesperado",
                text: "Formato de datos no aceptado",
                type: "error",
                confirmButtonText: "Aceptar"
            });
        });
            </script>';
            exit();
        }
        if (mainModel::verificar_datos("[a-zA-Z0-9]{1,35w}", $clave)) {
            echo '
            <script>  
            document.addEventListener("DOMContentLoaded", ()=>{
                Swal.fire({
                title:"Ocurrio un error inesperado",
                text: "Formato de datos no aceptado",
                type: "error",
                confirmButtonText: "Aceptar"
            });
        });
            </script>';
            exit();
        } */

        $clave = mainModel::encryption($clave);

        $datos_login = [
            "usuario" => $usuario,
            "clave" => $clave
        ];

        $datos_cuenta = loginModelo::iniciar_sesion_modelo($datos_login);

        if ($datos_cuenta->rowCount() == 1) {
            $row = $datos_cuenta->fetch();
            session_start(['name' => 'OC']);
            $_SESSION["id_oc"] = $row['usuario_id'];
            $_SESSION["nombre_oc"] = $row['usuario_nombre'];
            $_SESSION["apellido_oc"] = $row['usuario_apellido'];
            $_SESSION["privilegio_oc"] = $row['usuario_privilegio'];
            $_SESSION["token_oc"] = md5(uniqid(mt_rand(), true));

            return header("Location: " . SERVERURL . "home/");
        } else {
            echo '
            
            <script>  
            document.addEventListener("DOMContentLoaded", ()=>{
                Swal.fire({
                    title: "Ocurrio un error inesoerado",
                    text: "El usuario o clave no existe ",
                    type: "error",
                    confirmButtonText: "Aceptar",
                    });
            });
               
            </script>';
            exit();
        }
    } /* fin controlador iniciar_sesion_controlador */


    /* Controlador forzar cierre de sesion */
    public function forzar_cierre_sesion_controlador()
    {
        session_unset();
        session_destroy();
        if (headers_sent()) {
            return "<script> window.location.href='" . SERVERURL . "'; </script>";
        } else {
            return header("Location:" . SERVERURL . "");
        }
    }/* fin controlador forzar_cierre_sesion_controlador */
}
?>

<script>

</script>