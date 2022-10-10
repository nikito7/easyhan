; ---

if cnt==25
then

fr=fo("node.txt" 0)
res=fr(node fr)
print Read: %0res% [%node%]
fc(fr)

fr=fo("key.txt" 0)
res=fr(key fr)
print Read: %0res% [%key%]
fc(fr)

endif

if upsecs%tper==0
and cnt>30
then

ws="WebSend [emoncms.ssn.pt:80]"

=>%ws%/input/post.json?json={watts_zero:0,kwh_zero:0,watts_import:%ipwr%,watts_export:%epwr%,kwh_import:%ikw%,kwh_export:%ekw%}&devicekey=%key%&node=%node%&end=end

endif

; ---
