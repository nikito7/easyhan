; emoncms begin

ws="WebSend [10.1.0.79:80]"
node="EB99"
key="fa12c4d2ebee895c3cb3b0fedcde35f6"

=>%ws%/input/post.json?json={"ipwr":"%ipwr%","epwr":"%epwr%"}&devicekey=%key%&node=%node%

; emoncms end
