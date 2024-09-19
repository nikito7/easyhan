; ---
; fake solar
tmp=0
tmp=300
=>Publish freeds/fake_solar/SENSOR {"Time":"%tstamp%","ENERGY":{"Pv1Current":0,"Pv2Current":0,"Pv1Voltage":0,"Pv2Voltage":0,"Pv1Power":0,"Pv2Power":0,"Today":0,"Power":%0tmp%,"Temperature":0}}
; ---
; edpbox
tmp=ipwr-tmp
=>Publish freeds/%EBx%/SENSOR {"Time":"%tstamp%","ENERGY":{"Voltage":%1vt1%,"Power":%0tmp%}}
tmp=0
; ---
