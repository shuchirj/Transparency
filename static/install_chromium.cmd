echo ---- Chromium Installer ----
echo ---- Installing Chromium ----
echo Navigating to Desktop Folder
cd C:\Users\%USERNAME%\Desktop
echo Downloading Chromium
curl -o chromium.zip https://storage.googleapis.com/chromium-browser-snapshots/Win_x64/1132026/chrome-win.zip
echo Unzipping Chromium
tar -xf chromium.zip
echo Removing Zip File
del chromium.zip
echo Starting Chromium
start chrome-win\chrome.exe
echo ---- Chromium Installed ----
echo Remeber to pin the app to the taskbar.