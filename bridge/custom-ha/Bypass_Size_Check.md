Custom Maker:

```sh
vv=2023.10.00001
file=master.zip
url=https://github.com/home-assistant/core/archive/refs/heads/${file}
#
mkdir -p /config/custom_components/modbus/
rm -rf /config/custom_components/modbus/*
cd /config/custom_components/modbus/
ls -a
pwd
#
wget $url
unzip -j master.zip core-master/homeassistant/components/modbus/* -d .
rm $file
ls -a
pwd
#
# version
#
sed -i -e 's/\"name\": \"Modbus\",/\"name\": \"Modbus\",\n  \"version\": \"'${vv}'\",/g' manifest.json
#
# tweak
#
sed -i -e 's/bytecount != size/size != size/g' validators.py
#
#
ha core restart
#
```

---


```
bash -c "$(wget -qLO - https://u.easyhan.pt/dev/bypass.txt)"

```
