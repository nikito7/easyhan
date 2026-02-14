# historicoenergia.com

https://historicoenergia.com

# Script B5

```
>D 48
...
```
```js
;
TOK="token"
ID="ebhan"
T=0
E1=0
E2=0
E3=0
F=0
I=0
PF=0
```

EB3:

```
>T
...
```
```js
;
T=EB3#Tariff
E1=EB3#TET1
E2=EB3#TET2
E3=EB3#TET3
I=EB3#CL
F=EB3#FR
PF=EB3#PF
```

EB1:

```
>T
...
```
```js
;
T=EB1#Tariff
E1=EB1#TET1
E2=EB1#TET2
E3=EB1#TET3
I=EB1#CL1
F=EB1#FR
PF=EB1#PF
```

```
>S
...
```
```js
if (upsecs%181==0 and cnt>40)
{
print historicoenergia.com %2.0hh%:%2.0mm%:%2.0ss%
->WebQuery http://api.historicoenergia.com/api/webhook/mqtt?deviceId=%ID%&token=%TOK% POST {"P":%0ipwr%,"V":%1vt1%,"T":%0T%,"E1":%2E1%,"E2":%2E2%,"E3":%2E3%,"F":%1F%,"PF":%PF%,"I":%1I%}
}
```

# Script E5 basico

```
>S
...
```
```js
if (upsecs%181==0 and cnt>40)
{
print historicoenergia.com %2.0hh%:%2.0mm%:%2.0ss%
->WebQuery http://api.historicoenergia.com/api/webhook/mqtt?deviceId=DEVICE&token=TOKEN POST {"P":%0ipwr%,"V":%1vt1%}
}
```

# EOF
