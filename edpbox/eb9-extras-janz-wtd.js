; --

clk=s(2.0mm)+s(2.0ss)

if cnt==99
then
wtd+=1
endif

if wtd==1
then
old=clk
endif

if wtd==31
then
wtd=0
;
if old==clk
then
print HAN: Wtd Fail
cnt=1
smlj=0
;
fr=fo("/0001.log" 2)
res=fw(tstamp+"\n" fr)
fc(fr)
;
; 40s
=>BackLog Script 0; Delay 400; Script 1;
;
else
print HAN: Wtd OK!
endif
;
endif

; --
  
