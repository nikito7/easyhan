>D 48

min=0
max=0
cnt=0
raw=0
diff=0
cnt2=0
db=0

>B

spinm(2 1)
spin(2 1)
spinm(0 0)

>F

; keep adc busy
for cnt 1 45 1
raw=adc(0)
delay(1)
next

;spin(2 1)
;delay(30)
;spin(2 0)

cnt2=0
min=4095
max=0

for cnt 1 50 1
;
raw=adc(0)
;
if raw<min
then
min=raw
endif
;
if raw>max
then
max=raw
endif
;
delay(1)
cnt2+=1
;
next

diff=max-min

; map 32 85 20 420
db=(diff-20)*(85-32)/(420-20)+32


>J
,"noise":{
"min":%0min%,
"max":%0max%,
"diff":%0diff%,
"db":%0db%
}

>W

Min : %0min%
Max : %0max%
Diff: %0diff%
Cnt2: %0cnt2%
Noise: %0db% dB
<br>
Upsecs: %0upsecs%

; EOF
