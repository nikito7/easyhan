>D
>B

=>SerialLog 0
=>Sensor53 r
=>Sensor53 d0

>M 1

; esp32 19/18
; esp8266 3/1
; C6 pins 4 5(3)
; change to your gpios and mode
; power off is required
; rx mode  baud     tx time
;  v  v     v        v  v
+1,4,mN1,1,9600,Test,5(3),10,r010301000001,r010301010002

; console debug
;
; sensor53 d1
; sensor53 d0

1,=h<hr>

1,010302Uuuu@i0:1,Distance 500ms,mm,*,0
1,010304UUuu@i1:1,Distance 100ms,mm,*,0
1,010304xxxxUUuu@i1:10,Temperature 100ms,°C,*,1

1,=h<hr>

#

; eof

