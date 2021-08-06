# Imports
import win32con
import ctypes, ctypes.wintypes
import requests

#
# Functions
#
def dispatch_hotkey(msg):
    print("-> Hotkey detected!!!\n")
    
    try:
        r = requests.get("http://localhost:8888/like-current-track")
    except:
        print('\n** request failed is node server running and have you logged in?')
    print("\n*** Waiting for hotkey message...")

# Register hotkey
print("\n*** Registering global hotkey for CTRL + L by default")
if ctypes.windll.user32.RegisterHotKey(None, 1, win32con.MOD_CONTROL, ord('L')) != 0:

    # Wait for hotkey to be triggered
    print("\n*** Waiting for hotkey message...")
    try:
        msg = ctypes.wintypes.MSG()
        while ctypes.windll.user32.GetMessageA(ctypes.byref(msg), None, 0, 0) != 0:
            if msg.message == win32con.WM_HOTKEY:
                dispatch_hotkey(msg)
            
            ctypes.windll.user32.TranslateMessage(ctypes.byref(msg))
            ctypes.windll.user32.DispatchMessageA(ctypes.byref(msg))

    # Unregister hotkey
    finally:
        ctypes.windll.user32.UnregisterHotKey(None, 1)