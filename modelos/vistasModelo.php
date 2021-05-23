<?php
class vistasModelo
{

    /* ---------------- Modelo obtener vistas ---------------- */
    protected static function obtener_vistas_modelo($vistas)
    {
        $listaBlanca = ["perfiles-pc", "home", "nuevo-usuario", "usuarios", "perfil-usuario", "provedores", "cerrar-sesion", "login", "insumos", "crear-orden-de-compra"];
        if (in_array($vistas, $listaBlanca)) {
            if (is_file("./vistas/contenidos/" . $vistas . "-view.php")) {
                $contenido = "./vistas/contenidos/" . $vistas . "-view.php";
            } else {
                $contenido = "404";
            }
        } elseif ($vistas == "login" || $vistas == "index") {
            $contenido = "";
        } else {
            $contenido = "404";
        }
        return $contenido;
    }
}
