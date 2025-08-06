@echo off
echo ========================================
echo YSA Ghana Website - Windows Setup
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please download and install Node.js from https://nodejs.org/
    echo Then restart this script.
    pause
    exit /b 1
)

echo Node.js version:
node --version

echo NPM version:
npm --version

echo.
echo Installing dependencies...
npm install --legacy-peer-deps

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to install dependencies
    echo Try running as Administrator or check your internet connection
    pause
    exit /b 1
)

echo.
echo Setup completed successfully!
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open your browser to: http://localhost:3000
echo.
pause