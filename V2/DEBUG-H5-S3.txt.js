>D
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
+1,17,mN1,1,9600,Test,15(16),30,r010400010001


; console debug
;
; sensor53 d1
; sensor53 d0

1,=h<hr>

1,01040Cxxxxxxxxxxuu@i0:1,Clock ,h,*,0
1,01040Cxxxxxxxxxxxxuu@i0:1,Clock ,m,*,0
1,01040Cxxxxxxxxxxxxxxuu@i0:1,Clock ,s,*,0

1,=h<hr>

#

; eof
