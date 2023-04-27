; --

clk=s(2.0mm)+s(2.0ss)

if cnt==99 {
wtd+=1
}

if wtd==1 {
old=clk
}

if wtd==30 {
wtd=0
;
if old==clk {
cnt=1
;
fr=fo("0000.log" 2)
res=fw(tstamp+"\n" fr)
fc(fr)
;
; 7s
=>BackLog Script 0; Delay 70; Script 1;
}
;
}

; --
