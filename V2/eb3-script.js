>D 48

ver=20041
EBx="EB3"
C="Net."
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
lp1mm=99
lp1gmt=""
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

tper=30
=>SerialLog 0

>E

wfc=WifiConfig#?
wfp=WifiPower

>T

ipwr=EB3#API
epwr=EB3#APE
ikw=EB3#TEI
ekw=EB3#TEE
lp1y=EB3#LP1_Y
lp1m=EB3#LP1_M
lp1d=EB3#LP1_D
lp1hh=EB3#LP1_HH
lp1mm=EB3#LP1_MM
lp1gmt=EB3#LP1_GMT
lp3i=EB3#LPid9
lp6e=EB3#LPid10
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

if cnt==31
{
tper=10
=>UfsRun config.txt
}

if cnt==60
{
=>UfsRun discovery-EB3.txt
}

if cnt<100
{
cnt+=1
}

if chg[ss]>0
and cnt>30
then
ipwrm=ipwr
epwrm=epwr
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
if EBx=="EB1"
or EBx=="EB2"
then
res=fw(date+",L1\n" fr)
else
res=fw(date+",L1,L2,L3\n" fr)
endif
;
fc(fr)
delay(100)
fr=fo(vtf 2)
endif
res=fw(vts fr)
print CSV: Updating %vtf%
fc(fr)
;
endif

strd="cnt"+s(hh)

if chg[hh]>0
and cnt>55
then
;
if hh==0
then
=>UfsDelete 2d.csv
=>UfsRename 1d.csv,2d.csv
=>UfsRename 0d.csv,1d.csv
;
=>UfsDelete vt-2d.csv
=>UfsRename vt-1d.csv,vt-2d.csv
=>UfsRename vt-0d.csv,vt-1d.csv
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
delay(100)
fr=fo(chf 2)
endif
res=fw(chs fr)
print CSV: Updating %chf%
fc(fr)
;
ikwo=ikw
ekwo=ekw
svars
;
endif

lpf="LP-"+s(4.0lp1y)+"-"+s(2.0lp1m)+".csv"

if chg[lp1mm]>0
and lp1y>0
then
lps=s(4.0lp1y)+"-"+s(2.0lp1m)+"-"+s(2.0lp1d)+"T"+s(2.0lp1hh)+":"+s(2.0lp1mm)+"Z"+lp1gmt+","+s(5.0lp3i)+","+s(5.0lp6e)+"\n"
;
fr=fo(lpf 2)
;
res=fz(fr)
if res==0
then
res=fw("Date,Import Inc,Export Inc\n" fr)
fc(fr)
delay(100)
fr=fo(lpf 2)
endif
;
; LP csv
res=fw(lps fr)
print CSV: Updating %lpf%
;
fc(fr)
;
saldo=(lp3i-lp6e)/1000
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
,"H%EBx%":{
"s0":%3saldo%,
"s1":%3saldo1%,
"s2":%3saldo2%
}

>W

@<b>NTP </b> %date% %time% <b> Heap </b> %1fheap% kB
@<b>Init </b> %0cnt% %% <b> TelePeriod </b> %0tper% <b> Version </b> %0ver%
@<b>Wifi </b> %wfc% <b> Power </b> %0wfp% dBm <b> Topic </b> %topic%
@<br>
%EBx% Consumo %C%{m}%3saldo1% kWh
%EBx% Excedente %C%{m}%3saldo2% kWh
<br>
<a href="ufs/%lpf%">%lpf%</a>{m}<a href="ufs/charts.html">Charts JS</a>
<br>

$<div id="chart1" style="width:95%%;height:250px;padding:0px;"></div><br><br>
$gc(lt ipwrm epwrm "wr" "Import" "Export" strm)
$var options = {
$chartArea:{left:50,width:'80%%'},
$width:'100%%',legend:'none',
$title:'Potência (W) (~10min)',
$};
$gc(e)

; EOF V2
