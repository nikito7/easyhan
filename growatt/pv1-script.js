>D 48

ver=110
date=""
time=""
wfc=""
hh=0
mm=0
ss=0
wfp=0
cnt=0
m:ipwrm=0 60
m:epwrm=0 60
ipwr=0
epwr=0
strm="cnt0"
fheap=0
;

>B

tper=25
smlj=0

=>SerialLog 0
+>WifiConfig
+>WifiPower

=>Sensor53 r

>E

wfc=WifiConfig#?
wfp=WifiPower

>T

ipwr=?#InputPower
epwr=?#Power

>S

time=st(tstamp T 2)
date=st(tstamp T 1)
fheap=heap/1024

hh=st(time : 1)
mm=st(time : 2)
ss=st(time : 3)

if cnt==30
then
smlj=1
tper=10
=>UfsRun discovery.txt
endif

if cnt<99
then
cnt+=1
endif

if chg[mm]>0
and cnt>30
then
strm="cnt"+s(mm)
ipwrm=ipwr
print Array: ipwrm %0ipwrm[-1]%
epwrm=epwr
print Array: epwrm %0ipwrm[-1]%
endif

if (upsecs%5==0)
{
=>Publish freeds/growatt/SENSOR {"Time":"%tstamp%","ENERGY":{"Pv1Current":0,"Pv2Current":0,"Pv1Voltage":0,"Pv2Voltage":0,"Pv1Power":0,"Pv2Power":0,"Today":0,"Power":%1epwr%,"Temperature":0}}
}

>W

@<b>NTP </b> %date% %time% <b> Heap </b> %1fheap%
@<b>Vars </b> cnt=%0cnt% tper=%0tper% smlj=%0smlj% ver=%0ver%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% <b> Topic </b> %topic%
@<br>

$<div id="chart1" style="width:100%%;height:250px;padding:0px;"></div><br><br>
$gc(lt ipwrm epwrm "wr" "Import" "Export" strm)
$var options = {
$chartArea:{left:50,width:'80%%'},
$width:'100%%',legend:'none',
$title:'Input Power & Output Power 1h [W]',
$};
$gc(e)

; inverter growatt tl3-x

>M 1

+1,3,mN1,1,9600,PV1,1,10,r010400000003,r010400230003,r010400370002,r0104005D0003,r010400030008

; 0x0000 0,1,2

1,010406UUuu@i0:1,Inverter Status,,PV_Status,0
1,010406xxxxUUuuUUuu@i0:10,Input Power,W,InputPower,1

; 0x0023 35-36,37

1,010406UUuuUUuu@i1:10,Output Power,W,Power,1
1,010406xxxxxxxxUUuu@i1:100,Frequency,Hz,Frequency,2

; 0x0037 55-56

1,010404UUuuUUuu@i2:10,Total Energy,kWh,PV_Energy,1

1,=h<br>

; 0x005D 93-95

1,010406UUuu@i3:10,Temp 1,°C,*,1
1,010406xxxxUUuu@i3:10,Temp 2,°C,*,1
1,010406xxxxxxxxUUuu@i3:10,Temp 3,°C,*,1

1,=h<br>

; 0x0003 3-10

1,010410UUuu@i4:10,S1 Voltage,V,*,1
1,010410xxxxUUuu@i4:10,S1 Current,A,*,1
1,010410xxxxxxxxUUuuUUuu@i4:10,S1 Power,W,*,1

1,=h<br>

1,010410x8UUuu@i4:10,S2 Voltage,V,*,1
1,010410x8xxxxUUuu@i4:10,S2 Current,A,*,1
1,010410x8xxxxxxxxUUuuUUuu@i4:10,S2 Power,W,*,1


1,=h<br>

; eof meter
#
; eof script
