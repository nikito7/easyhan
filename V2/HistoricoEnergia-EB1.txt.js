>D 48

TOK="token"
ID="ebhan"
update=181
;
ver=105
date=""
time=""
wfc=""
wfp=0
cnt=0
;
ipwr=0
epwr=0
fheap=0
;
vt1=0
vt2=0
vt3=0
;
T=0
E1=0
E2=0
E3=0
F=0
I=0
PF=0

>B

tper=11
=>SerialLog 0

>E

wfc=WifiConfig#?
wfp=WifiPower

>T

ipwr=EB1#API
epwr=EB1#APE
vt1=EB1#VL1
vt2=EB1#VL2
vt3=EB1#VL3
;
T=EB1#Tariff
E1=EB1#TET1
E2=EB1#TET2
E3=EB1#TET3
;I=EB3#CL
I=EB1#CL1
F=EB1#FR
PF=EB1#PF

>S

if (upsecs%update==0 and cnt>40)
{
print historicoenergia.com
->WebQuery http://api.historicoenergia.com/api/webhook/mqtt?deviceId=%ID%&token=%TOK% POST {"P":%0ipwr%,"V":%1vt1%,"T":%0T%,"E1":%2E1%,"E2":%2E2%,"E3":%2E3%,"F":%1F%,"PF":%PF%,"I":%1I%}
}

time=st(tstamp T 2)
date=st(tstamp T 1)
fheap=heap/1024

if cnt==20
{
+>WifiConfig
+>WifiPower
+>BackLog Script 8
}

if cnt<100
{
cnt+=1
}

>W

@<b>NTP </b> %date% %time% <b> Heap </b> %1fheap% kB
@<b>Init </b> %0cnt% %% <b> TelePeriod </b> %0tper% <b> Version </b> %0ver%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% dBm <b> Topic </b> %topic%
@<br>
@<a target="_blank" href="https://historicoenergia.com"><b>historicoenergia.com</b></a>
@<br>

; EOF V2









