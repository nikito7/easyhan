>D

bug="fix"
PF="Factor"
AP="Potência"
TE="Energia"
date=""
time=""
clk=""
old=""
wfc=""
wfp=0
cnt=0
wtd=0
hh=0
mm=0
ss=0
fheap=0

>BS

tper=20
smlj=0

=>SerialLog 0
=>Sensor53 r

>E

wfc=WifiConfig#?
wfp=WifiPower

>S

hh=sml[1]
mm=sml[2]
ss=sml[3]

time=st(tstamp T 2)
date=st(tstamp T 1)
fheap=heap/1024

if cnt==25
{
smlj=1
tper=10
+>WifiConfig
+>WifiPower
=>UfsRun discovery1.txt
}

if cnt==40
{
=>UfsRun discovery2.txt
}

if cnt<99
{
cnt+=1
print cnt=%0cnt%
}

if chg[ss]>0
and cnt>30
then
print HAN: %2.0hh%:%2.0mm%:%2.0ss% !
endif

; extras
; apenas janz watchdog
; extras

>W

@<b>NTP </b> %date% %time% <b> Heap </b> %1fheap%
@<b>Vars </b> cnt=%0cnt% tper=%0tper% smlj=%0smlj%
@<b>Vars </b> wtd=%0wtd% clk=%0clk% old=%0old%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% <b> Topic </b> %topic%
@<br>

; segunda parte igual aos outros .js

