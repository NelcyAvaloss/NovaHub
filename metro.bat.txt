@echo off
echo =======================================
echo Cerrando procesos en el puerto 8081...
echo =======================================

FOR /F "tokens=5" %%P IN ('netstat -aon ^| findstr :8081 ^| findstr LISTENING') DO (
    echo Terminando proceso con PID %%P
    taskkill /PID %%P /F >nul 2>&1
)

echo.
echo =======================================
echo Iniciando Metro Bundler con --reset-cache
echo =======================================
npx react-native start --reset-cache
