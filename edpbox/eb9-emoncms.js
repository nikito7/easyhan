; emoncms begin

if upsecs%tper==0
and cnt>30
then

ws="WebSend [emoncms.ssn.pt:80]"
node="EB99"
key="fa12c4d2ebee895c3cb3b0fedcde35f6"

=>%ws%/input/post.json?json={ipwr:%ipwr%,epwr:%epwr%}&devicekey=%key%&node=%node%
=>%ws%/input/post.json?json={use:%ipwr%}&devicekey=%key%&node=%node%

endif

; emoncms end
