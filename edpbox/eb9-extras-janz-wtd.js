; --

clk=s(2.0mm)+s(2.0ss)

if cnt==99 {
wtd+=1
}

if wtd==1 {
old=clk
}

if wtd==31 {
wtd=0
;
if old==clk {
cnt=1
;
fr=fo("0001.log" 2)
res=fw(tstamp+"\n" fr)
fc(fr)
;
; 30s
=>BackLog Script 0; Delay 300; Script 1;
;
}
;
}

; --
