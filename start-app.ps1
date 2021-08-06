cd $PSScriptRoot
git stash
git pull
npm install
Start-Process node $PSScriptRoot/app.js -WindowStyle hidden
[system.Diagnostics.Process]::Start("chrome","http://localhost:8888/login")

$LISTENER_PATH = './pyth-keybind-listener'
$env:PYTHONIOENCODING = "UTF-8"
pip install -r $PSScriptRoot/$LISTENER_PATH/requirements.txt --user
$PYTH_PROC = Start-Process python $PSScriptRoot/$LISTENER_PATH/listener.py -WindowStyle hidden -PassThru
$PYTH_PROC | Export-Clixml -Path (Join-Path $ENV:temp 'processhandle.xml')
