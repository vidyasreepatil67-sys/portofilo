@echo off
echo Opening Portfolio...
echo.
echo Your portfolio will open in your default browser
echo.
timeout /t 2 /nobreak >nul
start http://localhost:3001
echo.
echo If the page doesn't load, make sure the server is running by running:
echo node serve.js
echo.
pause
