@echo off
echo ========================================
echo Testing The Strativa Website
echo ========================================
echo.

echo [1/3] Updating dependencies...
call npm install
echo.

echo [2/3] Running TypeScript check...
call npx tsc --noEmit
if %errorlevel% neq 0 (
    echo ERROR: TypeScript check failed!
    pause
    exit /b 1
)
echo TypeScript check passed!
echo.

echo [3/3] Building the app...
call npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo Build successful!
echo.

echo ========================================
echo ALL TESTS PASSED!
echo ========================================
echo.
echo To run the development server:
echo   npm run dev
echo.
echo Then open: http://localhost:3000
echo.
pause
