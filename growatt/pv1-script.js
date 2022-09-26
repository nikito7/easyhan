>D

bug="fix"
wfc=""
wfp=0
cnt=0
m:p:ipwrm=0 6
m:p:ipwrh=0 60
m:p:ipwrd=0 24
ipwr=0
hour=0
strh=""
strd=""

>B

tper=25
smlj=0

=>Delay 100
=>SerialLog 0
=>WifiConfig
=>WifiPower

=>Delay 100
=>Sensor53 r

>E

wfc=WifiConfig#?
wfp=WifiPower

>T

ipwr=?#Power

>S

if cnt==30
then
smlj=1
tper=20
=>UfsRun discovery.txt
endif

if cnt<99
then
cnt+=1
endif

; charts

if upsecs%tper==0
and cnt>30
then
strh="cnt0"
ipwrm=ipwr
endif

if upsecs%60==0
and cnt>30
then
ipwrh=ipwrm[-2]
print Array: ipwrh
print Saving Vars
svars
endif

hour=int(time/60)

if chg[hour]>0
and cnt>30
then
strd="cnt"+s(hour)
ipwrd=ipwrh[-2]
print Array: ipwrd
endif

>W

@<b>Vars </b> cnt=%0cnt% tper=%0tper% smlj=%0smlj%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% <b> Topic </b> %topic%
@<br>

; charts

$<br><div id="chart1" style="width:300px;height:200px;padding:0px;text-align:center"></div><br><br>
$gc(lt ipwrh "wr" "Power" strh)
$var options = {
$chartArea:{left:40,width:'80%%'},
$width:'300px',
$legend:'none',
$title:'Power 1h [W]',
$};
$gc(e)

$<div id="chart2" style="width:300px;height:200px;padding:0px;text-align:center"></div><br><br>
$gc(lt ipwrd "wr" "Power" strd)
$var options = {
$chartArea:{left:40,width:'80%%'},
$width:'300px',
$legend:'none',
$title:'Power 24h [W]',
$};
$gc(e)

; inverter growatt tl3-x

>M 1

+1,3,mN1,1,9600,PV1,1,15,r010400000003,r010400230003,r010400370002,r0104005D0003

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

; eof meter

#

; eof script 
; check code 12:08

