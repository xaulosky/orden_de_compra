<?php
require_once "mainModel.php";

class usuarioModelo extends mainModel
{
    /* Modelo agregar usuario */
    protected static function agregar_usuario_modelo($datos)
    {
        $sql = mainModel::conectar()->prepare("INSERT INTO usuario(usuario_rut, usuario_nombre,usuario_apellido,usuario_email,usuario_usuario,usuario_clave,usuario_estado,usuario_privilegio) VALUES(:RUT, :NOMBRE,:APELLIDO,:EMAIL, :USUARIO,:CLAVE,:ESTADO,:PRIVILEGIO)");

        $sql->bindParam(":RUT", $datos['rut']);
        $sql->bindParam(":NOMBRE", $datos['nombre']);
        $sql->bindParam(":APELLIDO", $datos['apellido']);
        $sql->bindParam(":EMAIL", $datos['email']);
        $sql->bindParam(":USUARIO", $datos['usuario']);
        $sql->bindParam(":CLAVE", $datos['clave']);
        $sql->bindParam(":ESTADO", $datos['estado']);
        $sql->bindParam(":PRIVILEGIO", $datos['privilegio']);
        $sql->execute();

        return $sql;

    }
}
