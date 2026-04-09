@echo off
echo ========================================
echo Clearing Next.js Cache
echo ========================================
echo.

echo Deleting .next folder...
if exist .next (
    rmdir /s /q .next
    echo Cache cleared!
) else (
    echo No cache found.
)
echo.

echo ========================================
echo Running npm run dev
echo ========================================
echo.

npm run dev
