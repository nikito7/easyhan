>D

time=""
date=""
clk=""
old=""
wfc=""
wfp=0
cnt=0
wtd=0
hh=0
mm=0
ss=0
tariff=0
ttext=""
m:pwrm=0 6
m:p:pwrh=0 60
pwr=0
strh=""

>B

=>Delay 100
=>Delay 100
=>Delay 100

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

tariff=?#Tariff

switch tariff
case 1
ttext="Vazio"
case 2
ttext="Ponta"
case 3
ttext="Cheias"
ends

; charts

pwr=?#Power
pwrm=pwr

>S

time=st(tstamp T 2)
date=st(tstamp T 1)
hh=sml[1]
mm=sml[2]
ss=sml[3]

if cnt==30
then
smlj=1
tper=10
=>UfsRun discovery1.txt
=>Delay 100
=>UfsRun discovery2.txt
endif

if cnt<99
then
cnt+=1
endif

; charts

if chg[mm]>0
and cnt>30
then
pwrh=pwrm[-2]
strh="cnt"+s(mm-1)
print Saving Vars
svars
endif

; janz wtd
; janz wtd eof

>W

@<b>NTP </b> %date% %time%
@<b>Vars </b> cnt=%0cnt% tper=%0tper% smlj=%0smlj%
@<b>Vars </b> wtd=%0wtd% clk=%0clk% old=%0old%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% <b> Topic </b> %topic%
@<br>
<br>
Tarifa {m} %ttext%
<br>

; charts

$<div id="chart1" style="width:300px;height:200px;padding:0px;text-align:center"></div><br><br>
$gc(lt pwrh "wr" "power" strh)
$var options = {
$chartArea:{left:40,width:'80%%'},
$width:'300px',
$legend:'none',
$title:'Power Import 1h [W]',
$};
$gc(e)

; EB3 Trifasico apenas !

>M 1

+1,3,mN1,1,9600,EBx,1,11,r010400010001,r0104006C0007,r010400730007,r0104007A0006,r010400260003,r010400160006,r0104000B0004,r01440601

; 01

1,01040Cxxxxxxxxxxuu@i0:1,Clock,h,CH,0
1,01040Cxxxxxxxxxxxxuu@i0:1,Clock,m,CM,0
1,01040Cxxxxxxxxxxxxxxuu@i0:1,Clock,s,CS,0

1,=h<br>

; 6C

1,01040EUUuu@i1:10,Voltage L1,V,VL1,1
1,01040ExxxxxxxxUUuu@i1:10,Voltage L2,V,VL2,1
1,01040ExxxxxxxxxxxxxxxxUUuu@i1:10,Voltage L3,V,VL3,1

1,=h<br>

1,01040ExxxxxxxxxxxxxxxxxxxxxxxxUUuu@i1:10,Current Total,A,Current,1

1,01040ExxxxUUuu@i1:10,Current L1,A,CL1,1
1,01040ExxxxxxxxxxxxUUuu@i1:10,Current L2,A,CL2,1
1,01040ExxxxxxxxxxxxxxxxxxxxUUuu@i1:10,Current L3,A,CL3,1

1,=h<br>

; 73

1,01041cx8x8x8UUuuUUuu@i2:1,Active Power Import,W,Power,0

1,01041cUUuuUUuu@i2:1,Active Power L1,W,API1,0
1,01041cx8UUuuUUuu@i2:1,Active Power L2,W,API2,0
1,01041cx8x8UUuuUUuu@i2:1,Active Power L3,W,API3,0

1,01041cx4UUuuUUuu@i2:1,Active Power L1 Export,W,APE1,0
1,01041cx8x4UUuuUUuu@i2:1,Active Power L2 Export,W,APE2,0
1,01041cx8x8x4UUuuUUuu@i2:1,Active Power L3 Export,W,APE3,0

1,=h<br>

; 7A

1,01040eUUuuUUuu@i3:1,Active Power Export,W,APE,0

1,01040exxxxxxxxUUuu@i3:1000,Power Factor,φ,Factor,3
1,01040exxxxxxxxxxxxUUuu@i3:1000,Power Factor L1,φ,PF1,3
1,01040exxxxxxxxxxxxxxxxUUuu@i3:1000,Power Factor L2,φ,PF2,3
1,01040exxxxxxxxxxxxxxxxxxxxUUuu@i3:1000,Power Factor L3,φ,PF3,3
1,01040exxxxxxxxxxxxxxxxxxxxxxxxUUuu@i3:10,Frequency,Hz,Frequency,1

1,=h<br>

; 26

1,01040CUUuuUUuu@i4:1000,Total Energy T1 Vazio,kWh,TET1,2
1,01040CxxxxxxxxUUuuUUuu@i4:1000,Total Energy T2 Ponta,kWh,TET2,2
1,01040CxxxxxxxxxxxxxxxxUUuuUUuu@i4:1000,Total Energy T3 Cheias,kWh,TET3,2

1,=h<br>

; 16

1,010418UUuuUUuu@i5:1000,Total Energy Import,kWh,TEI,2
1,010418xxxxxxxxUUuuUUuu@i5:1000,Total Energy Export,kWh,TEE,2

1,=h<br>

; 0B

1,01040euu@i6:1,Tariff,,Tariff,0

; load profile

1,=h<br>Load Profile (15min)<br>
1,=h<br>

1,01441dUUuu@i7:1,Year,,LP1_Y,0
1,01441dxxxxuu@i7:1,Month,,LP1_M,0
1,01441dxxxxxxuu@i7:1,Day,,LP1_D,0
1,01441dxxxxxxxxxxuu@i7:1,Hour,h,LP1_HH,0
1,01441dxxxxxxxxxxxxuu@i7:1,Minute,m,LP1_MM,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxuu@i7:1,Summer,,LP1_DST,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxxxuu@i7:1,AMR Profile Status,,LP2_AMR,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i7:1,Import Inc,Wh,LP3_IMP,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i7:1,+Ri Inc,VArh,LP4,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i7:1,-Rc Inc,VArh,LP5,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i7:1,Export Inc,Wh,LP6_EXP,0

; eof load profile
; eof meter
#
; eof script
; check code 12:14
