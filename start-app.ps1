npm install
Start-Process node app.js
[system.Diagnostics.Process]::Start("chrome","http://localhost:8888/login")

$LISTENER_PATH = './pyth-keybind-listener'
pip install -r $LISTENER_PATH/requirements.txt --user
Start-Process python $LISTENER_PATH/listener.py
