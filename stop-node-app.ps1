$node_app = Get-Process -Id (Get-NetTCPConnection -LocalPort 8888).OwningProcess
$node_id = $node_app.Id

Stop-Process -Id $node_id