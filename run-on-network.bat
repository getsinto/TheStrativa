@echo off
echo ========================================
echo Starting Next.js on Network
echo ========================================
echo.

echo Finding your IP address...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set IP=%%a
    goto :found
)

:found
set IP=%IP: =%
echo.
echo ========================================
echo Server will be accessible at:
echo http://%IP%:3000
echo ========================================
echo.
echo Share this URL with your client!
echo Press Ctrl+C to stop the server
echo.

npm run dev -- -H 0.0.0.0
