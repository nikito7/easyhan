
```js
Backlog 
TimeZone 99; 
TimeDST 0,0,3,1,1,60; 
TimeSTD 0,0,10,1,2,0; 
MqttUser none; 
MqttPassword none; 
Topic edpbox99; 
MqttClient Easy_HAN_%06X; 
WebLog 4; 
SerialLog 0; 
Restart 1; 
```

```js
Backlog 
SSID2 edpbox2-dev; 
Password2 edpbox123; 
Hostname Easy-HAN-EBx; 
OtaUrl http://u.easyhan.pt/han/tasmota4M.bin.gz; 
Template {"NAME":"easyhan.pt","GPIO":[1,1,1,1,1,1,1,1,1,1,1,1,1,1],"FLAG":0,"BASE":18}; 
SetOption65 1; 
Module 0; 
WifiConfig 2; 
Restart 1; 
``` 
