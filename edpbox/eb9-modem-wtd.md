- contadores com modem.
- libertar han.
- horário fixo.

```js
time=st(tstamp T 2)
date=st(tstamp T 1)

hh=st(time : 1)
mm=st(time : 2)
ss=st(time : 3)

if hh==14
and mm==37
then
; 600 = 60s
=>BackLog Script 0; Delay 600; Delay 600; Delay 600; Delay 600; Delay 600; Script 1
endif
```
