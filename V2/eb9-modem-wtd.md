- contadores com modem.
- libertar han.
- horário fixo.


```js
thh=st(time : 1)
tmm=st(time : 2)

if thh==21
and tmm==10
then
=>BackLog HanDelay 600;
endif
```
---

ou externamente:

curl http://10.1.0.200/cm?cmnd=HanDelay+600

Entre 300 a 900.
