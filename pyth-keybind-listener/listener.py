from pynput import keyboard
import requests

def on_activate():
    print("-> Hotkey detected!!!\n")
    
    try:
        r = requests.get("http://localhost:8888/like-current-track")
    except:
        print('\n** request failed is node server running and have you logged in?')
    print("\n*** Waiting for hotkey message...")

def for_canonical(f):
    return lambda k: f(l.canonical(k))

hotkey = keyboard.HotKey(
    keyboard.HotKey.parse('<ctrl>+l'),
    on_activate)
with keyboard.Listener(
        on_press=for_canonical(hotkey.press),
        on_release=for_canonical(hotkey.release)) as l:
    l.join()
