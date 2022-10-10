>D 32

ver=139
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
m:ipwrm=0 60
m:epwrm=0 60
ipwr=0
epwr=0
strm="cnt0"
fheap=0
ws=""
node=""
key=""
ikw=0
ekw=0
fr=0
res=0

>B

=>Delay 500

tper=25
smlj=0

=>SerialLog 0
=>WebLog 4
=>WifiConfig
=>WifiPower

=>Sensor53 r

>E

wfc=WifiConfig#?
wfp=WifiPower

>T

ipwr=?#Power
epwr=?#APE
ikw=?#TEI
ekw=?#TEE

>S

time=st(tstamp T 2)
date=st(tstamp T 1)
fheap=heap/1024

hh=sml[1]
mm=sml[2]
ss=sml[3]

if cnt==30
then
smlj=1
tper=10
endif

if cnt==45
then
=>UfsRun discovery1.txt
=>UfsRun discovery2.txt
endif

if cnt<99
then
cnt+=1
print cnt=%0cnt%
endif

if chg[ss]>0
then
print han %2.0hh%:%2.0mm%:%2.0ss%
endif

if chg[mm]>0
and cnt>30
then
strm="cnt"+s(mm)
ipwrm=ipwr
epwrm=epwr
endif

; janz wtd begin
; janz wtd end
; emoncms begin
; emoncms end

>W

@<b>NTP </b> %date% %time% <b> Heap </b> %1fheap%
@<b>Vars </b> cnt=%0cnt% tper=%0tper% smlj=%0smlj% ver=%0ver%
@<b>Vars </b> wtd=%0wtd% clk=%0clk% old=%0old%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% <b> Topic </b> %topic%
@<br>
<br>

$<div id="chart1" style="width:95%%;height:250px;padding:0px;"></div><br><br>
$gc(lt ipwrm epwrm "wr" "Import" "Export" strm)
$var options = {
$chartArea:{left:50,width:'80%%'},
$width:'100%%',legend:'none',
$title:'Power Import & Power Export 1h [W]',
$};
$gc(e)

; EB1 monofasico

>M 1

+1,3,mN1,1,9600,EB1,1,15,r010400010001,r0104006C0002,r010400160002,r010400260003,r010400790003,r0104007F0002,r0104000B0002,r01440301

; r01440601 Imp+Exp
; r01440301 Imp

; 01

1,01040Cxxxxxxxxxxuu@i0:1,Clock ,h,CH,0
1,01040Cxxxxxxxxxxxxuu@i0:1,Clock ,m,CM,0
1,01040Cxxxxxxxxxxxxxxuu@i0:1,Clock ,s,CS,0

1,=h<br>

; 6C

1,010404UUuu@i1:10,Voltage L1 ,V,Voltage,1
1,010404xxxxUUuu@i1:10,Current L1 ,A,Current,1

1,=h<br>

; 16

1,010408UUuuUUuu@i2:1000,Total Energy Import ,kWh,TEI,2
1,010408xxxxxxxxUUuuUUuu@i2:1000,Total Energy Export ,kWh,TEE,2

1,=h<br>

; 26

1,01040CUUuuUUuu@i3:1000,Total Energy T1 Vazio ,kWh,TET1,2
1,01040CxxxxxxxxUUuuUUuu@i3:1000,Total Energy T2 Ponta ,kWh,TET2,2
1,01040CxxxxxxxxxxxxxxxxUUuuUUuu@i3:1000,Total Energy T3 Cheias ,kWh,TET3,2

1,=h<br>

; 79

1,01040aUUuuUUuu@i4:1,Active Power Import ,W,Power,0
1,01040axxxxxxxxUUuuUUuu@i4:1,Active Power Export ,W,Active Power Export,0
1,01040axxxxxxxxxxxxxxxxUUuu@i4:1000,Power Factor ,φ,Factor,3

; 7F

1,01040aUUuu@i5:10,Frequency ,Hz,Frequency,1

; 0B

1,010406uu@i6:1,Tariff ,,Tariff,0

; load profile

1,=h<br>Load Profile (15min)<br>
1,=h<br>

; 01441d Imp+Exp
; 014411 Imp

1,014411UUuu@i7:1,Year,,LP1_Y,0
1,014411xxxxuu@i7:1,Month,,LP1_M,0
1,014411xxxxxxuu@i7:1,Day,,LP1_D,0
1,014411xxxxxxxxxxuu@i7:1,Hour,h,LP1_HH,0
1,014411xxxxxxxxxxxxuu@i7:1,Minute,m,LP1_MM,0
; summer
; amr
1,014411xxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i7:1,Import Inc,Wh,LP3_IMP,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i7:1,+Ri Inc,VArh,LP4,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i7:1,-Rc Inc,VArh,LP5,0
1,01441dxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxUUuuUUuu@i7:1,Export Inc,Wh,LP6_EXP,0

; eof lp
; eof meter
#
; eof script
