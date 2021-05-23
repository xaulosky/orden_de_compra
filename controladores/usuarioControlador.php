<?php
if ($peticionAjax) {
    require_once "../modelos/usuarioModelo.php";
} else {
    require_once "./modelos/usuarioModelo.php";
}

class usuarioControlador extends usuarioModelo
{
    /* Contorlador agregar usuario */
    public function agregar_usuario_controlador()
    {
        $nombre = mainModel::limpiar_cadena($_POST["usuario_nombre_reg"]);
        $apellido = mainModel::limpiar_cadena($_POST["usuario_apellido_reg"]);
        $email = mainModel::limpiar_cadena($_POST["usuario_email_reg"]);
        $rut = mainModel::limpiar_cadena($_POST["usuario_rut_reg"]);
        $estado = mainModel::limpiar_cadena($_POST["usuario_estado_reg"]);
        $usuario = mainModel::limpiar_cadena($_POST["usuario_usuario_reg"]);
        $clave1 = mainModel::limpiar_cadena($_POST["usuario_clave1_reg"]);
        $clave2 = mainModel::limpiar_cadena($_POST["usuario_clave2_reg"]);
        $privilegio = mainModel::limpiar_cadena($_POST["usuario_privilegio_reg"]);

        /* = Comprobar campos vacios = */
        if ($nombre == "" || $apellido == "" || $usuario == "" || $clave1 == "" || $clave2 == "") {
            $alerta = [
                "Alerta" => "simple",
                "Titulo" => "Ocurrrio un error inseperado",
                "Texto" => "No has llenado los campos obligatorios",
                "Tipo" => "error"
            ];
            echo json_encode($alerta);
            exit();
        }
        /* Verificando integridad de los datos */
        /* Aca se validan todos los campos de los formularios */
        /* if(mainModel::verificar_datos("/^[0-9]+-[0-9kK]{1}/",$rut)){
            $alerta = [
                "Alerta" => "simple",
                "Titulo" => "Ocurrrio un error inseperado",
                "Texto" => "Rut incorrecto",
                "Tipo" => "error"
            ];
            echo json_encode($alerta);
            exit();
        } */

        /* COMPROBAMOS QUE EL RUT NO SE REPITA */
        $check_rut = mainModel::ejecutar_consulta_simple("SELECT usuario_rut FROM usuario WHERE usuario_rut='$rut'");
        if ($check_rut->rowCount() > 0) {
            $alerta = [
                "Alerta" => "simple",
                "Titulo" => "Ocurrrio un error inseperado",
                "Texto" => "El RUT ya se encuentra registrado",
                "Tipo" => "error"
            ];
            echo json_encode($alerta);
            exit();
        }
        /* COMPROBAMOS QUE EL USUARIO NO SE REPITA */
        $check_user = mainModel::ejecutar_consulta_simple("SELECT usuario_usuario FROM usuario WHERE usuario_usuario='$usuario'");

        if ($check_user->rowCount() > 0) {
            $alerta = [
                "Alerta" => "simple",
                "Titulo" => "Ocurrrio un error inseperado",
                "Texto" => "El Nombre de usuario ya se encuentra registrado",
                "Tipo" => "error"
            ];
            echo json_encode($alerta);
            exit();
        }
        if ($email != "") {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                /* COMPROBAMOS QUE EL USUARIO NO SE REPITA */
                $check_user = mainModel::ejecutar_consulta_simple("SELECT usuario_email FROM usuario WHERE usuario_email='$email'");

                if ($check_user->rowCount() > 0) {
                    $alerta = [
                        "Alerta" => "simple",
                        "Titulo" => "Ocurrrio un error inseperado",
                        "Texto" => "El Email ya se encuentra registrado",
                        "Tipo" => "error"
                    ];
                    echo json_encode($alerta);
                    exit();
                }
            } else {
                $alerta = [
                    "Alerta" => "simple",
                    "Titulo" => "Ocurrrio un error inseperado",
                    "Texto" => "Email ingresado no valido",
                    "Tipo" => "error"
                ];
                echo json_encode($alerta);
                exit();
            }
        }


        if ($clave1 != $clave2) {
            $alerta = [
                "Alerta" => "simple",
                "Titulo" => "Ocurrrio un error inseperado",
                "Texto" => "Las claves no coinciden",
                "Tipo" => "error"
            ];
            echo json_encode($alerta);
            exit();
        } else {
            $clave = mainModel::encryption($clave1);
        }

        $datos_usuario_reg = [
            "nombre" => $nombre,
            "apellido" => $apellido,
            "rut" => $rut,
            "usuario" => $usuario,
            "email" => $email,
            "privilegio" => $privilegio,
            "estado" => $estado,
            "clave" => $clave
        ];

        $agregar_usuario = usuarioModelo::agregar_usuario_modelo($datos_usuario_reg);

        if ($agregar_usuario->rowCount() == 1) {
            $alerta = [
                "Alerta" => "limpiar",
                "Titulo" => "Usuario registrado",
                "Texto" => "Los datos del usuario han sido registrados con exito",
                "Tipo" => "success"
            ];
        } else {
            $alerta = [
                "Alerta" => "simple",
                "Titulo" => "Ocurrrio un error inseperado",
                "Texto" => "Las claves no coinciden",
                "Tipo" => "error"
            ];
        }
        echo json_encode($alerta);
    }/* fIN DEL CONTROLADOR  agregar_usuario_controlador*/
}
