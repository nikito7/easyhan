>D 48
>B

=>SerialLog 0
=>Sensor53 r
=>Sensor53 d0

>M 1

; esp32 19/18
; esp8266 3/1
; C6 pins 4 5(3)
; S3 pins 17 15(16)
; change to your gpios and mode
; power off is required
;  rx mode  baud     tx dirtime
;   v  v     v        v  v
+1,17,mN1,1,9600,ET112,15(16),30,r010300000010


; console debug
;
; sensor53 d1
; sensor53 d0

1,=h<hr>

1,010320SSss@i0:10,Volts,V,*,1
1,010320x2SSssSSss@i0:1000,Amps,A,*,3
1,010320x6SSssSSss@i0:10,Watts,W,*,1
1,010320x10SSssSSss@i0:10,VA,VA,*,1
1,010320x14SSssSSss@i0:10,VAr,VAr,*,1
1,010320x18SSssSSss@i0:10,W dmd,,*,1
1,010320x22SSssSSss@i0:10,W dmd peak,,*,1
1,010320x26SSssSSss@i0:1000,PF,,*,3
1,010320x28SSssSSss@i0:10,Freq,Hz,*,1
1,=h<hr>

#

; eof
