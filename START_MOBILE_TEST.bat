@echo off
echo ========================================
echo   Mobile Testing - Personal Portfolio
echo ========================================
echo.
echo Starting server with network access...
echo.
echo ========================================
echo   HOW TO VIEW ON YOUR PHONE:
echo ========================================
echo.
echo 1. Make sure your phone is on the SAME WiFi as this computer
echo.
echo 2. Look for "Network:" address below (example: http://192.168.1.100:3001)
echo.
echo 3. Open that address in your phone's browser
echo.
echo ========================================
echo   OR TEST ON COMPUTER:
echo ========================================
echo.
echo 1. Press F12 in Chrome
echo 2. Click the mobile device icon (top-left)
echo 3. Select a phone model (iPhone, Samsung, etc.)
echo 4. Test all features!
echo.
echo ========================================
echo   NOTE: Portfolio runs on PORT 3001
echo   (Changed to avoid conflicts with other projects)
echo ========================================
echo.
call npm run dev
pause
