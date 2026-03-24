@echo off
echo Starting Portfolio Server...
echo.
echo Open your browser and go to: http://localhost:8080/simple-portfolio.html
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8080
