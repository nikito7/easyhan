; emoncms begin

if upsecs%tper==0
and cnt>30
then

ws="WebSend [emoncms.ssn.pt:80]"
node="EB3"
key="a01a52cca45abb6fb44331f4d09432ac"

=>%ws%/input/post.json?json={watts_import:%ipwr%,watts_export:%epwr%,kwh_import:%ikw%,kwh_export:%ekw%}&devicekey=%key%&node=%node%&end=end

endif

; emoncms end
