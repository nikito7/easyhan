; ---
; fake solar
tmp=0
tmp=ipwr*4
=>Publish HAN/%EB%/ds_pv/SENSOR {"Time":"%tstamp%","ENERGY":{"Pv1Current":0,"Pv2Current":0,"Pv1Voltage":0,"Pv2Voltage":0,"Pv1Power":0,"Pv2Power":0,"Today":0,"Power":%0tmp%,"Temperature":0}}
; edpbox
tmp=ipwr*-1
=>Publish HAN/%EB%/ds_eb/SENSOR {"Time":"%tstamp%","ENERGY":{"Voltage":0,"Power":%0tmp%}}
tmp=0
; ---
