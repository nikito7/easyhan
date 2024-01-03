- contadores com modem.
- libertar han.
- horário fixo.

Requer script >= 10283.

```js
...
time=st(tstamp T 2)
date=st(tstamp T 1)
fheap=heap/1024

colar aqui

hh=sml[1]
mm=sml[2]
ss=sml[3]
...
```

```js
thh=st(time : 1)
tmm=st(time : 2)

if thh==21
and tmm==10
then
; 600 = 60s
=>BackLog Script 0; Delay 3600; Script 1
endif
```
