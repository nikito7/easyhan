>D 48

ver=1003
;ver=20038
date=""
time=""
wfc=""
wfp=0
cnt=0
;
max=700
min=204
fheap=0
;
tmp=0
raw=0
hour=0
m:adc=0 60
cstr2="cnt0"

>B

tper=30
=>SerialLog 0
spinm(2 1)
spin(2 0)

>E

wfc=WifiConfig#?
wfp=WifiPower

>T

raw=ANALOG#A0

>S

spin(2 0)
delay(30)
spin(2 1)

time=st(tstamp T 2)
date=st(tstamp T 1)
fheap=heap/1024

if cnt==20
{
+>WifiConfig
+>WifiPower
+>BackLog Script 8
}

if cnt==31
{
tper=10
}

if cnt==60
{
=>UfsRun discovery.txt
}

if cnt<100
{
cnt+=1
}


if (secs%60==0)
then
adc=raw
endif

>W

@<b>NTP </b> %date% %time% <b> Heap </b> %1fheap% kB
@<b>Init </b> %0cnt% %% <b> TelePeriod </b> %0tper% <b> Version </b> %0ver%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% dBm <b> Topic </b> %topic%
@<br>
<br> {m}
Max (fixed) {m} %0max% raw
Current {m} %0raw% raw
Min (fixed) {m} %0min% raw
<br> {m}

$<div id="chart1" style="width:95%%;height:250px;padding:0px;"></div><br><br>
$gc(lt adc "wr" "ADC" cstr2)
$var options = {
$chartArea:{left:50,width:'80%%'},
$width:'100%%',legend:'none',
$title:'ADC (raw) (~1min * 60)',
$};
$gc(e)


; EOF ADC

