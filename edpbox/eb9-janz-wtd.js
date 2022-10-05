clk=s(2.0mm)+s(2.0ss)

if cnt==99
then
wtd+=1
endif

if wtd==1
then
old=clk
endif

if wtd==90
then
wtd=0
if old==clk
then
print modbus error !!!
; 
=>Restart -3
; 
endif
endif

; --
