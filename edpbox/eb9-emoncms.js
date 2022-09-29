; emoncms begin

if upsecs%tper==0
and cnt>30
then

ws="WebSend [emoncms.ssn.pt:80]"
node="EB3"
key="a01a52cca45abb6fb44331f4d09432ac"

=>%ws%/input/post.json?json={ipwr:%ipwr%,epwr:%epwr%,ikw=%ikw%,ekw=%ekw%}&devicekey=%key%&node=%node%

endif

; emoncms end
