npm install
Start-Process node app.js

pip install -r './pyth-keybind-listener/requirements.txt'
Start-Process python './pyth-keybind-listener/listener.py'
[system.Diagnostics.Process]::Start("chrome","http://localhost:8888/login")