; ---

clk=s(2.0mm)+s(2.0ss)

if cnt==99
{
wtd+=1
}

if wtd==1
{
old=clk
}

if wtd==30
{
wtd=0
;
if old==clk
{
cnt=1
=>BackLog Script 0; Delay 500; Script 1; Sensor53 r
}
;
}

; ---
