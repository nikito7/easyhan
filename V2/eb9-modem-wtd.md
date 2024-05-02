- contadores com modem.
- libertar han.
- horário fixo.

https://github.com/nikito7/easyhan/blob/ff44b8071265f3575cb88990db2480f2251bce0c/V2/eb3-script.js#L255

```js
; extras
thh=st(time : 1)
tmm=st(time : 2)

if thh==21
and tmm==10
then
=>BackLog HanDelay 900;
endif
; extras
```
---

ou externamente:

curl http://10.1.0.200/cm?cmnd=HanDelay+900

Entre 300 a 900.
