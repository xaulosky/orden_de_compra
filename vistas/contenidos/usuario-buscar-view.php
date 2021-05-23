<?php

if (!isset($_SESSION["token_oc"])) {
    echo $lc->forzar_cierre_sesion_controlador();
    exit();
}


?>
<div class="container-fluid">
    <h1>Buscar usuario</h1>
</div>