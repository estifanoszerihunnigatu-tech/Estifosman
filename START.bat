@echo off
echo ========================================
echo   Personal Portfolio - Development Server
echo ========================================
echo.
echo Installing dependencies (if needed)...
call npm install
echo.
echo Starting development server...
echo Your portfolio will open at http://localhost:3001
echo (Port 3001 to avoid conflicts with other projects)
echo.
echo Press Ctrl+C to stop the server
echo.
call npm run dev
pause
