@echo off
echo ========================================
echo Fixing The Strativa Website
echo ========================================
echo.

echo [Step 1/4] Cleaning up...
if exist .next rmdir /s /q .next
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo Cleanup complete!
echo.

echo [Step 2/4] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo Dependencies installed!
echo.

echo [Step 3/4] Building the app...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    echo Check the error messages above.
    pause
    exit /b 1
)
echo Build successful!
echo.

echo [Step 4/4] Starting development server...
echo.
echo ========================================
echo SUCCESS! Starting server...
echo ========================================
echo.
echo Open your browser to: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
