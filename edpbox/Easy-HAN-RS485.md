
```js
Backlog0 
TimeZone 99; 
TimeDST 0,0,3,1,1,60; 
TimeSTD 0,0,10,1,2,0; 
MqttUser none; 
MqttPassword none; 
WebLog 4; 
SerialLog 0; 
Restart 1; 
```

```js
Backlog0 
SSID2 edpbox2-dev; 
Password2 edpbox123; 
Topic edpbox7x; 
OtaUrl http://u.easyhan.pt/han/tasmota4M.bin.gz; 
Hostname Easy-HAN-EBx; 
MqttClient Easy_HAN_%06X; 
Template {"NAME":"easyhan.pt","GPIO":[1,1,1,1,1,1,1,1,1,1,1,1,1,1],"FLAG":0,"BASE":18}; 
SetOption65 1; 
Module 0; 
WifiConfig 2; 
Restart 1; 
``` 
