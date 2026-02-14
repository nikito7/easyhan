# historicoenergia.com

https://historicoenergia.com

# Script B5

```
>D 48
...
```
```js
HeTOK="token"
HeID="ebhan"
HeT=0
HeE1=0
HeE2=0
HeE3=0
HeF=0
HeI=0
HePF=0
```

EB3:

```
>T
...
```
```js
HeT=EB3#Tariff
HeE1=EB3#TET1
HeE2=EB3#TET2
HeE3=EB3#TET3
HeI=EB3#CL
HeF=EB3#FR
HePF=EB3#PF
```

EB1:

```
>T
...
```
```js
HeT=EB1#Tariff
HeE1=EB1#TET1
HeE2=EB1#TET2
HeE3=EB1#TET3
HeI=EB1#CL1
HeF=EB1#FR
HePF=EB1#PF
```

```
>S
...
```
```js
if (upsecs%181==0 and cnt>40)
{
print historicoenergia.com %2.0hh%:%2.0mm%:%2.0ss% T:%1.0HeT%
->WebQuery http://api.historicoenergia.com/api/webhook/mqtt?deviceId=%HeID%&token=%HeTOK% POST {"P":%0ipwr%,"V":%1vt1%,"T":%0HeT%,"E1":%2HeE1%,"E2":%2HeE2%,"E3":%2HeE3%,"F":%1HeF%,"PF":%HePF%,"I":%1HeI%}
}
```

# Script E5 basico

```
>S
...
```
```js
if (upsecs%33==0 and cnt>40)
{
print historicoenergia.com %2.0hh%:%2.0mm%:%2.0ss%
->WebQuery http://api.historicoenergia.com/api/webhook/mqtt?deviceId=DEVICE&token=TOKEN POST {"P":%0ipwr%,"V":%1vt1%}
}
```

# EOF
