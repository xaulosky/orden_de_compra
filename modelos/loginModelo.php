<?php
require_once "mainModel.php";

class loginModelo extends mainModel{
    /* Modelo iniciar sesion */
    protected static function iniciar_sesion_modelo($datos){
        $sql = mainModel::conectar()->prepare("SELECT * FROM usuario WHERE usuario_usuario=:Usuario AND usuario_clave = :Clave AND usuario_estado='Activo'");
        $sql->bindParam(":Usuario", $datos['usuario']);
        $sql->bindParam(":Clave", $datos['clave']);
        $sql->execute();
        return $sql;

    }
}