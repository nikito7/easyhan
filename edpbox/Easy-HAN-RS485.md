# Easy HAN ® RS485

Tasmota > Consoles > Console

1.

![Easy HAN](./img/howto-1.jpg)

(linha única)

```js
Backlog 
TimeZone 99; 
TimeDST 0,0,3,1,1,60; 
TimeSTD 0,0,10,1,2,0; 
MqttUser none; 
MqttPassword none; 
MqttClient Easy_HAN_%06X; 
WebLog 3; 
Sleep 75; 
WifiPower 15;
Topic edpbox99; 
Restart 1; 
```

2. 

![Easy HAN](./img/howto-2.jpg)

(linha única)

```js
Backlog 
SSID2 edpbox2-dev; 
Password2 edpbox123; 
Hostname Easy-HAN-EB99; 
Template {"NAME":"easyhan.pt","GPIO":[1,1,1,1,1,1,1,1,1,1,1,1,1,1],"FLAG":0,"BASE":18}; 
Module 0; 
WifiConfig 2; 
OtaUrl http://u.easyhan.pt/han/tasmota-4M.bin.gz; 
Restart 1; 
``` 

3. Upload files

http://u.easyhan.pt/setup/EB1/

![files](./img/files0823a.jpg)

![Easy HAN](./img/files0823b.jpg)

Desde Agosto 2023 apenas existe um ficheiro discovery por tipo: mono ou trifásico.

4. OTA Upgrade

![Easy HAN](./img/howto-4.jpg)


...

5. Enable Script

```js
Backlog Script 1; SaveData 2; Restart 1;
```

<hr>

# Sagem

```js
Backlog Sleep 75; WifiPower 15; 
```

---

# mN2 (Stop Bits 2)

Ziv e alguns Landis

Implica a existência dos dois scripts

(linha única)

```js
Backlog 
UfsRename script.txt,script-mN1.txt; 
UfsRename script-mN2.txt,script.txt; 
Script 1; Restart 1;
```

Voltar ao mN1:

(linha única)

```js
Backlog 
UfsRename script.txt,script-mN2.txt; 
UfsRename script-mN1.txt,script.txt; 
Script 1; Restart 1;
```

---

https://easyhan.pt

Easy HAN ® RS485


