# spotify-push-to-like
Have you ever been listening to spotify while gaming or focusing on a separate window. You are listening to your discovery weekly, your daily mix 1-3, or a playlist your friend shared you. Out of nowhere!? a Banger! but you were too focused on your match and dont remember what track is was. With spotify push to like you can circumvent this issue simply by pressing ctrl + L !!!

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
