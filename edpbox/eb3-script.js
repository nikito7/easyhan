>D 48

ver=10305
EB="EB3"
C="Net."
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
thh=0
tmm=0
;
m:ipwrm=0 50
m:epwrm=0 50
ipwr=0
epwr=0
strm="cnt0"
fheap=0
;
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
saldo=0
p:saldo1=0
p:saldo2=0
;
vts=""
vtf=""
vt1=0
vt2=0
vt3=0

>B

if upsecs<5
then
=>WiFi 0
endif

tper=20
smlj=0

=>SerialLog 0
=>BackLog Delay 150; Sensor53 r; Sensor53 l2;

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
vt1=?#VL1
vt2=?#VL2
vt3=?#VL3

>S

if upsecs==5
then
=>WiFi 1
endif

time=st(tstamp T 2)
date=st(tstamp T 1)
fheap=heap/1024

hh=sml[1]
mm=sml[2]
ss=sml[3]

if cnt==21
then
smlj=1
tper=11
+>WifiConfig
+>WifiPower
+>BackLog Script 8
endif

if cnt==31
then
=>UfsRun discovery-%EB%.txt
endif

if cnt<99
then
cnt+=1
print cnt=%0cnt%
endif

if chg[ss]>0
and cnt>30
then
print HAN: %2.0hh%:%2.0mm%:%2.0ss% !
ipwrm=ipwr
epwrm=epwr
; freeds
endif

if upsecs%600==0
and cnt>30
then
;
vts=s(2.0hh)+":"+s(2.0mm)+","+s(0vt1)+","+s(0vt2)+","+s(0vt3)+"\n"
vtf="vt-0d.csv"
fr=fo(vtf 2)
res=fz(fr)
if res==0
then
;
res=fw(date+",L1,L2,L3\n" fr)
;
fc(fr)
fr=fo(vtf 2)
endif
res=fw(vts fr)
fc(fr)
;
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
=>UfsDelete2 vt-2d.csv
=>UfsRename2 vt-1d.csv,vt-2d.csv
=>UfsRename2 vt-0d.csv,vt-1d.csv
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
imp=ikw-ikwo
exp=ekw-ekwo
;
chs=s(2.0hh)+"h"+","+s(imp)+","+s(exp)+"\n"
chf="0d.csv"
fr=fo(chf 2)
res=fz(fr)
if res==0
then
res=fw(date+",Import,Export\n" fr)
fc(fr)
fr=fo(chf 2)
endif
res=fw(chs fr)
fc(fr)
;
ikwo=ikw
ekwo=ekw
svars
;
endif

lpf="LP-"+s(4.0lp1y)+"-"+s(2.0lp1m)+".csv"

if chg[lp1mm]>0
and cnt>50
then
lps=s(4.0lp1y)+"-"+s(2.0lp1m)+"-"+s(2.0lp1d)+"T"+s(2.0lp1hh)+":"+s(2.0lp1mm)+","+s(3lp3i)+","+s(3lp6e)+"\n"
;
fr=fo(lpf 2)
;
res=fz(fr)
if res==0
then
res=fw("Date,Import,Export\n" fr)
fc(fr)
fr=fo(lpf 2)
endif
;
; diagrama LP csv
res=fw(lps fr)
;
fc(fr)
;
saldo=lp3i-lp6e
if saldo>0
then
saldo1+=saldo
endif
if saldo<0
then
saldo2+=saldo*-1
endif
svars
;
endif

; extras
; extras

>J
,"HAN":{
"s0":%3saldo%,
"s1":%3saldo1%,
"s2":%3saldo2%,
"ck":"%2.0hh%:%2.0mm%:%2.0ss%"
}

>W

@<b>NTP </b> %date% %time% <b> Heap </b> %1fheap%
@<b>Vars </b> cnt=%0cnt% tper=%0tper% smlj=%0smlj% ver=%0ver%
@<b>Vars </b> wtd=%0wtd% clk=%0clk% old=%0old%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% <b> Topic </b> %topic%
@<br>
<br>
%EB% Consumo %C%{m}%3saldo1% kWh
%EB% Excedente %C%{m}%3saldo2% kWh
<br>
<a href="/ufs/%lpf%">%lpf%</a>{m}<a href="/ufs/charts.html">Charts</a>
<br>

$<div id="chart1" style="width:95%%;height:250px;padding:0px;"></div><br><br>
$gc(lt ipwrm epwrm "wr" "Import" "Export" strm)
$var options = {
$chartArea:{left:50,width:'80%%'},
$width:'100%%',legend:'none',
$title:'Potência (W) (10min)',
$};
$gc(e)

; EB3 !

>M 1

+1,3,mN1,1,9600,EB3,1,11,r010400010001,r0104006C0007,r010400730008,r0104007B0005,r010400260003,r010400160006,r0104000B0007,r01440601,r0104001C0003

1,=h<br>

; 01

1,01040Cx4xxuu@i0:1,Clock,h,CH,0
1,01040Cx4xxxxuu@i0:1,Clock,m,CM,0
1,01040Cx4xxxxxxuu@i0:1,Clock,s,CS,0

1,=h<br>

; 6C

1,01040EUUuu@i1:10,Voltage L1,V,VL1,1
1,01040Ex4UUuu@i1:10,Voltage L2,V,VL2,1
1,01040Ex8UUuu@i1:10,Voltage L3,V,VL3,1

1,=h<br>

1,01040Ex8x4UUuu@i1:10,Current,A,CL,1

1,01040ExxxxUUuu@i1:10,Current L1,A,CL1,1
1,01040Ex4xxxxUUuu@i1:10,Current L2,A,CL2,1
1,01040Ex8xxxxUUuu@i1:10,Current L3,A,CL3,1

1,=h<br>

; 73

1,010420x24UUuuUUuu@i2:1,%AP% Import,W,API,0
1,010420x28UUuuUUuu@i2:1,%AP% Export,W,APE,0

1,010420UUuuUUuu@i2:1,%AP% L1,W,API1,0
1,010420x8UUuuUUuu@i2:1,%AP% L2,W,API2,0
1,010420x16UUuuUUuu@i2:1,%AP% L3,W,API3,0

1,010420x4UUuuUUuu@i2:1,%AP% L1 Export,W,APE1,0
1,010420x12UUuuUUuu@i2:1,%AP% L2 Export,W,APE2,0
1,010420x20UUuuUUuu@i2:1,%AP% L3 Export,W,APE3,0

1,=h<br>

; 7B

1,01040aUUuu@i3:1000,%PF%,φ,PF,3
1,01040ax2UUuu@i3:1000,%PF% L1,φ,PF1,3
1,01040ax4UUuu@i3:1000,%PF% L2,φ,PF2,3
1,01040ax6UUuu@i3:1000,%PF% L3,φ,PF3,3
1,01040ax8UUuu@i3:10,Frequency,Hz,FR,1

1,=h<br>

; 26

1,01040CUUuuUUuu@i4:1000,%TE% T1 Vazio,kWh,TET1,3
1,01040Cx4UUuuUUuu@i4:1000,%TE% T2 Ponta,kWh,TET2,3
1,01040Cx8UUuuUUuu@i4:1000,%TE% T3 Cheias,kWh,TET3,3

1,=h<br>

; 16

1,010418UUuuUUuu@i5:1000,%TE% Total Import,kWh,TEI,3
1,010418x4UUuuUUuu@i5:1000,%TE% Total Export,kWh,TEE,3

1,=h<br>

; 1C

1,01040cUUuuUUuu@i8:1000,%TE% Import L1,kWh,TEIL1,3
1,01040cx4UUuuUUuu@i8:1000,%TE% Import L2,kWh,TEIL2,3
1,01040cx8UUuuUUuu@i8:1000,%TE% Import L3,kWh,TEIL3,3

1,=h<br>

; 0B

1,01041Auu@i6:1,Tarifa,,Tariff,0
1,01041AxxUUuuUUuu@i6:1000,CT1,kVA,CT1,2
1,01041Ax12xxUUuuUUuu@i6:1000,CT4,kVA,CT4,2

1,=h<br>

; 0144 LP

1,01441dUUuu@i7:1,LP Year,,LP1_Y,0
1,01441dxxxxuu@i7:1,LP Month,,LP1_M,0
1,01441dxxxxxxuu@i7:1,LP Day,,LP1_D,0
1,01441dx4xxuu@i7:1,LP Hour,h,LP1_HH,0
1,01441dx4xxxxuu@i7:1,LP Minute,m,LP1_MM,0
;
1,01441dx8x4xxUUuuUUuu@i7:1000,LP Import Inc,kWh,LP3_IMP,3
1,01441dx16xxUUuuUUuu@i7:1000,LP 4,kWh,LP4,3
1,01441dx16x4xxUUuuUUuu@i7:1000,LP 5,kWh,LP5,3
1,01441dx16x8xxUUuuUUuu@i7:1000,LP Export Inc,kWh,LP6_EXP,3

#
; EOF
