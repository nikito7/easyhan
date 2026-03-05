>D 48

ver=101
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

>B

tper=181
=>SerialLog 0

>E

wfc=WifiConfig#?
wfp=WifiPower

>T

ipwr=EB3#API
epwr=EB3#APE
vt1=EB3#VL1
vt2=EB3#VL2
vt3=EB3#VL3
hh=EB3#HH
mm=EB3#MM
ss=EB3#SS

>S

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
<br>
<a href="https://historicoenergia.com">historicoenergia.com</a>
<br>

; EOF V2
