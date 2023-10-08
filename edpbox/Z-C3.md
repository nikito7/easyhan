```js
Backlog 
TimeZone 99; 
TimeDST 0,0,3,1,1,60; 
TimeSTD 0,0,10,1,2,0; 
MqttUser none; 
MqttPassword none; 
MqttClient Easy_HAN_C3_%06X; 
WebLog 3; 
WifiPower 17; 
Topic edpbox99; 
Restart 1; ; 
```

```js
Backlog 
SSID2 edpbox2-dev; 
Password2 edpbox123; 
Hostname Easy-HAN-EB99-C3; 
WifiConfig 2; 
OtaUrl http://u.easyhan.pt/han/tasmota32c3.bin; 
Restart 1; ; 
```



---

2. 

![Easy HAN](./img/howto-2.jpg)

(linha única)



Module 0; 
Template {"NAME":"easyhan.pt","GPIO":[1,1,1,1,1,1,1,1,1,1,1,1,1,1],"FLAG":0,"BASE":18}; 

EOF
