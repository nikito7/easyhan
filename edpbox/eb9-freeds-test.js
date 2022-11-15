; ---
tmp=0
tmp=ipwr*3
=>Publish easyhan/ds_pv/SENSOR {"Time":"%tstamp%","ENERGY":{"Pv1Current":1,"Pv2Current":1,"Pv1Voltage":1,"Pv2Voltage":1,"Pv1Power":1,"Pv2Power":1,"Today":1,"Power":%0tmp%,"Temperature":1}}
; ---
=>Publish easyhan/ds_eb/SENSOR {"Time":"%tstamp%","ENERGY":{"Voltage":230,"Power":%0ipwr%}}
tmp=0
; ---
