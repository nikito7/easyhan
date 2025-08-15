>D 48
res=0

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
+1,17,mN1,1,9600,ET112,15(16),30,r010300000010,r010301000012,r01030112000C,r010311030001,r0103000B0001

; set mode
; r010611030001


; console debug
;
; sensor53 d1
; sensor53 d0

1,=h<hr>

1,=hTable 1

1,010320SSss@i0:10,Volts,V,Voltage,1
1,010320x2SSssSSss@i0:1000,Amps,A,Current,3
1,010320x6SSssSSss@i0:10,Watts,W,Power,1
1,010320x10SSssSSss@i0:10,VA,VA,*,1
1,010320x14SSssSSss@i0:10,VAr,VAr,*,1
1,010320x18SSssSSss@i0:10,W dmd,,*,1
1,010320x22SSssSSss@i0:10,W dmd peak,,*,1
1,010320x26SSssSSss@i0:1000,PF,pu,PowerFactor,3
1,010320x30SSss@i0:10,Freq,Hz,Frequency,1

1,=h<hr>

1,=hTable 2 A
; word swap "sss"

1,010324SSssSSsss@i1:1000,Amps,A,*,3
1,010324x4SSssSSsss@i1:10,Volts,V,*,1

1,010324x8SSssSSsss@i1:10,Null,,*,0

1,010324x12SSssSSsss@i1:10,Watts,W,*,1
1,010324x16SSssSSsss@i1:10,VA,VA,*,1
1,010324x20SSssSSsss@i1:10,VAr,VAr,*,1

1,010324x24SSssSSsss@i1:1000,PF,pu,*,3
1,010324x28SSssSSsss@i1:10,Null,,*,0
1,010324x32SSssSSsss@i1:10,Freq,Hz,*,1

1,=h<hr>

1,=hTable 2 B

1,010318SSssSSsss@i2:10,kWh+ total,kWh,*,1
1,010318x4SSssSSsss@i2:10,kVArh+ total,kVArh,*,1
1,010318x8SSssSSsss@i2:10,kWh- total,kWh,*,1
1,010318x12SSssSSsss@i2:10,kVArh- total,kVArh,*,1

1,010318x16SSssSSsss@i2:10,W dmd,W,*,1
1,010318x20SSssSSsss@i2:10,W dmd peak,W,*,1


1,=h<hr>

1,=hDevice

1,010302UUuu@i3:1,Mode,,Mode,0
1,010302UUuu@i4:1,Model,,Model,0


1,=h<hr>

#

; eof

