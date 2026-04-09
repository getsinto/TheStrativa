@echo off
echo ========================================
echo Workaround Applied: Using CDN Fonts
echo ========================================
echo.

echo Clearing cache...
if exist .next rmdir /s /q .next
echo.

echo Building...
npm run build

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Build completed!
    echo ========================================
    echo.
    echo Now run: npm run dev
    echo Then open: http://localhost:3000
    echo.
) else (
    echo.
    echo ========================================
    echo Build failed - Node.js v25 issue
    echo ========================================
    echo.
    echo SOLUTION: Downgrade to Node.js v20 LTS
    echo.
    echo 1. Go to: https://nodejs.org/
    echo 2. Download v20 LTS
    echo 3. Install it
    echo 4. Run this script again
    echo.
)

pause
