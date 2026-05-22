@echo off
setlocal

set SCRIPT_DIR=%~dp0
set WRAPPER_PS1=%SCRIPT_DIR%.mvn\wrapper\maven-wrapper.ps1

if not defined JAVA_HOME (
  for /f "usebackq delims=" %%I in (`powershell -NoProfile -Command "$cmd=(Get-Command java -ErrorAction SilentlyContinue).Source; if($cmd){ Split-Path -Parent (Split-Path -Parent $cmd) }"`) do (
    set "JAVA_HOME=%%I"
  )
)

if not exist "%WRAPPER_PS1%" (
  echo [ERROR] %WRAPPER_PS1% not found.
  exit /b 1
)

powershell -NoProfile -ExecutionPolicy Bypass -File "%WRAPPER_PS1%" %*
exit /b %errorlevel%
