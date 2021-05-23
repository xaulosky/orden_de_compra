<?php
class vistasModelo
{

    /* ---------------- Modelo obtener vistas ---------------- */
    protected static function obtener_vistas_modelo($vistas)
    {
        $listaBlanca = ["perfiles-pc", "home", "usuario-lista", "usuario-nuevo", "usuario-buscar", "provedores-lista", "provedores-buscar", "provedores-nuevo", "cerrar-sesion", "login", "insumos-lista", "insumos-nuevo", "insumos-lista", "crear-orden-de-compra", "cliente-nuevo", "cliente-buscar", "cliente-lista"];
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
