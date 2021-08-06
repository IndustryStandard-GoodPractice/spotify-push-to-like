cd $PSScriptRoot
npm install
Start-Process node $PSScriptRoot/app.js
[system.Diagnostics.Process]::Start("chrome","http://localhost:8888/login")

$LISTENER_PATH = './pyth-keybind-listener'
$env:PYTHONIOENCODING = "UTF-8"
pip install -r $PSScriptRoot/$LISTENER_PATH/requirements.txt --user
Start-Process python $PSScriptRoot/$LISTENER_PATH/listener.py
