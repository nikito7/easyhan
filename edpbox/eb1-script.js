>D 48

ver=10245
EB="EB1"
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
m:ipwrm=0 50
m:epwrm=0 50
ipwr=0
epwr=0
strm="cnt0"
fheap=0
;
ws=""
node=""
key=""
p:ikw=0
p:ekw=0
fr=0
res=0
;
lp1y=0
lp1m=0
lp1d=0
lp1hh=0
lp1mm=0
lp3i=0
lp6e=0
lps=""
lpf=""
;
p:ikwo=0
p:ekwo=0
tmp=0
chs=""
chf=""
imp=0
exp=0
;
pv1w=0
p:pv1k=0
p:pv1ko=0
sol=0
;
saldo=0
p:saldo1=0
p:saldo2=0

>BS

tper=20
smlj=0

=>SerialLog 0
=>Sensor53 r

>E

wfc=WifiConfig#?
wfp=WifiPower

>T

ipwr=?#Power
epwr=?#APE
ikw=?#TEI
ekw=?#TEE
lp1y=?#LP1_Y
lp1m=?#LP1_M
lp1d=?#LP1_D
lp1hh=?#LP1_HH
lp1mm=?#LP1_MM
lp3i=?#LP3_IMP
lp6e=?#LP6_EXP

>S

hh=sml[1]
mm=sml[2]
ss=sml[3]

time=st(tstamp T 2)
date=st(tstamp T 1)
fheap=heap/1024

if cnt==25
then
smlj=1
tper=10
+>WifiConfig
+>WifiPower
=>UfsRun discovery1.txt
endif

if cnt==40
then
=>UfsRun discovery2.txt
endif

if cnt<99
then
cnt+=1
print cnt=%0cnt%
endif

if chg[ss]>0
and cnt>30
then
print han %2.0hh%:%2.0mm%:%2.0ss%
ipwrm=ipwr
epwrm=epwr
; freeds
; freeds
endif

strd="cnt"+s(hh)

if chg[hh]>0
and cnt>50
then
;
if hh==0
then
=>UfsDelete2 2d.csv
=>UfsRename2 1d.csv,2d.csv
=>UfsRename2 0d.csv,1d.csv
;
tmp=lp1y-1
=>UfsDelete2 LP-%4.0tmp%-%2.0lp1m%.csv
;
endif
;
if ikwo==0
or ikw==0
then
ikwo=ikw
endif
;
if ekwo==0
or ekw==0
then
ekwo=ekw
endif
;
if pv1ko==0
or pv1k==0
then
pv1ko=pv1k
endif
;
imp=ikw-ikwo
exp=ekw-ekwo
sol=pv1k-pv1ko
;
chs=s(2.0hh)+"h"+","+s(imp)+","+s(exp)+","+s(sol)+"\n"
chf="0d.csv"
fr=fo(chf 2)
res=fz(fr)
if res==0
then
res=fw(date+",Import,Export,Solar\n" fr)
fc(fr)
fr=fo(chf 2)
endif
res=fw(chs fr)
fc(fr)
;
ikwo=ikw
ekwo=ekw
pv1ko=pv1k
svars
;
endif

lpf="LP-"+s(4.0lp1y)+"-"+s(2.0lp1m)+".csv"

if chg[lp1mm]>0
and cnt>50
then
lps=s(4.0lp1y)+"-"+s(2.0lp1m)+"-"+s(2.0lp1d)+"T"+s(2.0lp1hh)+":"+s(2.0lp1mm)+","+s(0lp3i)+","+s(0lp6e)+"\n"
;
fr=fo(lpf 2)
;
res=fz(fr)
if res==0
then
res=fw("Date,Import Inc,Export Inc\n" fr)
fc(fr)
fr=fo(lpf 2)
endif
;
res=fw(lps fr)
fc(fr)
;
saldo=lp3i-lp6e
if saldo>0
then
saldo1+=saldo/1000
endif
if saldo<0
then
saldo2+=saldo/1000*-1
endif
svars
;
=>Publish2 easyhan/%EB%/saldo %0saldo%
=>Publish2 easyhan/%EB%/saldo1 %3saldo1%
=>Publish2 easyhan/%EB%/saldo2 %3saldo2%
;
endif

; extras
; extras

>W

@<b>NTP </b> %date% %time% <b> Heap </b> %1fheap%
@<b>Vars </b> cnt=%0cnt% tper=%0tper% smlj=%0smlj% ver=%0ver%
@<b>Vars </b> wtd=%0wtd% clk=%0clk% old=%0old%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% <b> Topic </b> %topic%
@<br>
<br>
%EB% LP Calculado{m}%3saldo1% kWh
%EB% LP Excedente{m}%3saldo2% kWh
<br>
Solar{m}%1pv1w% W
Solar{m}%1pv1k% kWh
<br>
<a href="/ufs/%lpf%">%lpf%</a>{m}<a href="/ufs/charts.html">Charts</a>
<br>

$<div id="chart1" style="width:95%%;height:250px;padding:0px;"></div><br><br>
$gc(lt ipwrm epwrm "wr" "Import" "Export" strm)
$var options = {
$chartArea:{left:50,width:'80%%'},
$width:'100%%',legend:'none',
$title:'Potência ( Watts ) ( 10min )',
$};
$gc(e)

; EB1 mono

>M 1

+1,3,mN1,1,9600,EB1,1,10,r010400010001,r0104006C0002,r010400160002,r010400260003,r010400790003,r0104007F0002,r0104000B0004,r01440601

; r01440601 Imp+Exp
; r01440301 Imp

; 01

1,01040Cx4xxuu@i0:1,Clock ,h,CH,0
1,01040Cx4xxxxuu@i0:1,Clock ,m,CM,0
1,01040Cx4xxxxxxuu@i0:1,Clock ,s,CS,0

1,=h<br>

; 6C

1,010404UUuu@i1:10,Voltage L1 ,V,Voltage,1
1,010404xxxxUUuu@i1:10,Current L1 ,A,Current,1

1,=h<br>

; 16

1,010408UUuuUUuu@i2:1000,%TE% Total Import ,kWh,TEI,2
1,010408x4UUuuUUuu@i2:1000,%TE% Total Export ,kWh,TEE,2

1,=h<br>

; 26

1,01040CUUuuUUuu@i3:1000,%TE% T1 Vazio ,kWh,TET1,2
1,01040Cx4UUuuUUuu@i3:1000,%TE% T2 Ponta ,kWh,TET2,2
1,01040Cx8UUuuUUuu@i3:1000,%TE% T3 Cheias ,kWh,TET3,2

1,=h<br>

; 79

1,01040aUUuuUUuu@i4:1,%AP% Import ,W,Power,16
1,01040ax4UUuuUUuu@i4:1,%AP% Export ,W,Active Power Export,16
1,01040ax8UUuu@i4:1000,%PF% ,φ,Factor,3

; 7F

1,01040aUUuu@i5:10,Frequency ,Hz,Frequency,1

1,=h<br>

; 0B

1,01040euu@i6:1,Tarifa ,,Tariff,0
1,01040exxUUuuUUuu@i6:1000,Potência T1,kVA,PT1,2
1,01040ex4xxUUuuUUuu@i6:1000,Potência T2,kVA,PT2,2
1,01040ex8xxUUuuUUuu@i6:1000,Potência T3,kVA,PT3,2

1,=h<br>

; lp

; 01441d Imp+Exp
; 014411 Imp

1,01441dUUuu@i7:1,LP Year,,LP1_Y,0
1,01441dxxxxuu@i7:1,LP Month,,LP1_M,0
1,01441dxxxxxxuu@i7:1,LP Day,,LP1_D,0
1,01441dx4xxuu@i7:1,LP Hour,h,LP1_HH,0
1,01441dx4xxxxuu@i7:1,LP Minute,m,LP1_MM,0
; summer
; amr
1,01441dx8x4xxUUuuUUuu@i7:1,LP Import Inc,Wh,LP3_IMP,0
; lp4
; lp5
1,01441dx8x8x8xxUUuuUUuu@i7:1,LP Export Inc,Wh,LP6_EXP,0

#
; eof
