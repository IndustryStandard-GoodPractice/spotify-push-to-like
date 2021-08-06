$NODE_APP = Get-Process -Id (Get-NetTCPConnection -LocalPort 8888).OwningProcess
$NODE_ID = $NODE_APP.Id

Stop-Process -Id $NODE_ID