$WINDOW_STYLE = 'hidden'

cd $PSScriptRoot

#run stop script to close any hidden services before starting new instance
./stop-node-app.ps1

# Override default windowstyle options are: hidden, minimized, maximized
if($args[0] -ne $null){
    $WINDOW_STYLE = $args[0]
}

# Start Node Application
npm install
Start-Process node $PSScriptRoot/app.js -WindowStyle $WINDOW_STYLE
[system.Diagnostics.Process]::Start("chrome","http://localhost:8888/login")

# Launch Python listener
$LISTENER_PATH = './pyth-keybind-listener'
$env:PYTHONIOENCODING = "UTF-8"
pip install -r $PSScriptRoot/$LISTENER_PATH/requirements.txt --user
$PYTH_PROC = Start-Process python $PSScriptRoot/$LISTENER_PATH/listener.py -PassThru -WindowStyle $WINDOW_STYLE
$PYTH_PROC | Export-Clixml -Path (Join-Path $ENV:temp 'processhandle.xml')
