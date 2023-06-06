Tasmota > Consoles > Console

1.

(linha única)

```js
Backlog 
TimeZone 99; 
TimeDST 0,0,3,1,1,60; 
TimeSTD 0,0,10,1,2,0; 
MqttUser none; 
MqttPassword none; 
MqttClient Easy_HAN_%06X; 
WebLog 4; 
SerialLog 0; 
Sleep 75; 
WifiPower 15; 
Topic edpbox99; 
Restart 1; 
```

2. 

(linha única)

```js
Backlog 
SSID2 edpbox2-dev; 
Password2 edpbox123; 
Hostname Easy-HAN-EBx; 
SetOption65 1; 
Template {"NAME":"easyhan.pt","GPIO":[1,1,1,1,1,1,1,1,1,1,1,1,1,1],"FLAG":0,"BASE":18}; 
Module 0; 
WifiConfig 2; 
OtaUrl http://u.easyhan.pt/han/tasmota-4M.bin.gz; 
Restart 1; 
``` 

---

3. Upload files

![files](./img/files.jpg)

4. OTA Upgrade

...

5. Enable Script

```js
Backlog Script 1; Restart 1;
```

...

# Sagem

```js
Backlog Sleep 75; WifiPower 15; 
```

---

# mN2

Ziv e alguns Landis

Implica a existência dos dois scripts

(linha única)

```js
Backlog 
UfsRename script.txt,script-mN1.txt; 
UfsRename script-mN2.txt,script.txt; 
Restart 1;
```

---

[![Discord](https://img.shields.io/discord/494714310518505472?style=plastic&logo=discord)](https://discord.gg/Mh9mTEA) 

https://easyhan.pt

