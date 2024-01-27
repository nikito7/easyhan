@echo off

set /a start=1
set /a end=999

:loop

echo python rtu.py %start%

set /a start+=1

if %start% lss %end% (
goto loop
)

echo end
rem eof
pause
