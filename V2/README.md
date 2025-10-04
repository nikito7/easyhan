# Override Settings

Tools > Manage filesystem <br>
Criar o ficheiro config.txt

```js
HanDelayWait 1000
HanDelayError 5000
HanTimeout 1500
HanRestart 0
TelePeriod 10
HanSkip 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
```

O ficheiro só é aplicado aos 30 segundos depois de iniciado.

# HanSkip

HanSkip 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0


```js
1 - EB Type
2 - EMI Info
3 - Contract
4 - LP ID
5 - Clock
6 - Voltage. Current.
7 - Power. Power Factor mono.
8 - Power Factor tri. Frequency mono.
9 - kWh Energy Tarifas
10 - kWh Total Energy
11 - kWh L1 L2 L3 
12 - Reserved
13 - Load Profile
14 - Ciclo. Tarifa.
15 - ICP Status
```

Apenas Watts:

```js
HanSkip 1,1,1,1,1,1,0,1,1,1,1,1,1,1,1
```
Realtime Netmetering (qs):

```js
HanSkip 1,1,1,1,0,1,0,1,1,0,1,1,1,1,1
```

Tudo a cada 5min (script);

```js
>S

if (upsecs%300==0 and upsecs>100)
{
=>BackLog HanSkip 0,0; Delay 200; HanSkip 1,1,1,1,1,1,0,1,1,1,1,1,1,1,1
}
```

# HAN V2


https://github.com/nikito7/han-dev/tree/dev/tasmota/xdrv100

EB1:
https://u.easyhan.pt/v2/setup-v2/

Deve-se usar os ficheiros do u.easyhan.pt

Os ficheiros do github acima, são apenas para seguir o desenvolvimento.
