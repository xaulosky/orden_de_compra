<?php
session_destroy();

echo
'<script>
window.location.href = "' . SERVERURL . '"
</script>';
