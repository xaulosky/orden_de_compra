<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?php echo SERVERURL; ?>">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
        <a class="nav-link" href="<?php echo SERVERURL; ?>home">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Home</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
        Sistena Orden de Compra
    </div>
    <!-- Heading -->
    <li class="nav-item">
        <a class="nav-link" href="<?php echo SERVERURL . "crear-orden-de-compra/"; ?>">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Crear O.C.</span></a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="<?php echo SERVERURL . "insumos-lista/"; ?>">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Insumos</span></a>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="<?php echo SERVERURL . "provedores-lista/"; ?>">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Lista Provedores</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="<?php echo SERVERURL . "provedores-buscar/"; ?>">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Buscar Provedores</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="<?php echo SERVERURL . "provedores-nuevo/"; ?>">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Nuevo Provedor</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- CLIENTES -->
    <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseClientes" aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Clientes</span>
        </a>
        <div id="collapseClientes" class="collapse" aria-labelledby="headingClientes" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Opciones de cliente</h6>
                <a class="collapse-item" href="<?php echo SERVERURL . "cliente-buscar/"; ?>">Buscar Cliente</a>
                <a class="collapse-item" href="<?php echo SERVERURL . "cliente-lista/"; ?>">Lista Clientes</a>
                <a class="collapse-item" href="<?php echo SERVERURL . "cliente-nuevo/"; ?>">Nuevo Cliente</a>
            </div>
        </div>
    </li>
    <!-- CLIENTES -->

    <!-- Usuarios -->
    <?php if ($_SESSION['privilegio_oc'] == 1) { ?>
        <!-- Divider -->
        <hr class="sidebar-divider">

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUsuarios" aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-wrench"></i>
                <span>Usuarios</span>
            </a>
            <div id="collapseUsuarios" class="collapse" aria-labelledby="headingUsuarios" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Opciones de usuario</h6>
                    <a class="collapse-item" href="<?php echo SERVERURL . "usuario-buscar/"; ?>">Buscar Usuario</a>
                    <a class="collapse-item" href="<?php echo SERVERURL . "usuario-lista/"; ?>">Lista Usuarios</a>
                    <a class="collapse-item" href="<?php echo SERVERURL . "usuario-nuevo/"; ?>">Nuevo Usuario</a>
                </div>
            </div>
        </li>
    <?php } ?>

    <!-- Usuarios -->

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    <!-- Sidebar Message -->
    <div class="sidebar-card d-none d-lg-flex">
        <img class="sidebar-card-illustration mb-2" src="<?php echo SERVERURL; ?>vistas/img/undraw_rocket.svg" alt="...">
        <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
    </div>

</ul>
<!-- End of Sidebar -->