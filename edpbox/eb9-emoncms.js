if upsecs%tper==0
and cnt>30
then

ws="WebSend [emoncms.ssn.pt:80]"

; node.txt
; key.txt

=>%ws%/input/post.json?json={watts_zero:0,kwh_zero:0,watts_import:%ipwr%,watts_export:%epwr%,kwh_import:%ikw%,kwh_export:%ekw%}&devicekey=%key%&node=%node%&end=end

endif

; --
