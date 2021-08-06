# spotify-push-to-like

## starting the app

### Windows 
run the start-app.ps1 script, this will start the node server in background prompt and automatically direct you to the spotify login handler. a python console will also open and listen for ctrl + L

### Non-Windows
run the following commands to start the node server and follow the url printed in the console.
```
npm install
node app.js
```
then run the following commands to start the python listener
```
pip install -r './pyth-keybind-listener/requirements.txt'
python.exe './pyth-keybind-listener/listener.py'
```