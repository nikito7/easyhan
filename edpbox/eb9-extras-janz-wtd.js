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

if wtd==90
{
wtd=0
;
if old==clk
{
;
=>Restart -3
;
}
}

; ---
