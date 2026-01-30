# historicoenergia.com

https://historicoenergia.com

# Script
```
>D
...
HeTOK="token"
HeID="ebhan"
HeT=-1
HeE1=-1
HeE2=-1
HeE3=-1
HeF=-1
HeI=-1
HePF=-1
```

```
>T
...
HeT=EB3#Tariff
HeE1=EB3#TET1
HeE2=EB3#TET2
HeE3=EB3#TET3
HeI=EB3#CL
HeF=EB3#FR
HePF=EB3#PF
```

```
>S
...
if (upsecs%33==0 and cnt>40)
{
print historicoenergia.com %2.0hh%:%2.0mm%:%2.0ss% T:%1.0HeT%
->WebQuery http://api.historicoenergia.com/api/webhook/mqtt?deviceId=%HeID%&token=%HeTOK% POST {"P":%0ipwr%,"V":%1vt1%,"T":%0HeT%,"E1":%2HeE1%,"E2":%2HeE2%,"E3":%2HeE3%,"F":%1HeF%,"PF":%HePF%,"I":%1HeI%}
}
```
