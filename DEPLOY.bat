@echo off
echo ========================================
echo   Deploy Portfolio to GitHub Pages
echo ========================================
echo.
echo This will deploy your portfolio to GitHub Pages
echo.
echo Make sure you have:
echo 1. Created a GitHub repository
echo 2. Updated package.json with your GitHub username
echo 3. Committed all changes
echo.
pause
echo.
echo ========================================
echo   Step 1: Building portfolio...
echo ========================================
echo.
call npm run build
echo.
echo ========================================
echo   Step 2: Deploying to GitHub Pages...
echo ========================================
echo.
call npm run deploy
echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your portfolio should be live in 1-2 minutes at:
echo https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
echo.
echo (Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values)
echo.
pause
