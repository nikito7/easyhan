>D 48

cnt=0

>B

tper=60
=>SerialLog 0

>S

if cnt==20
{
=>BackLog Script 8
=>HanSkip 1,1,1,1,1,1,0,1,1,1,1,1,1,1,1
=>UfsRun config.txt
}

if cnt<100
{
cnt+=1
}

if (upsecs%300==0 and upsecs>100)
{
=>BackLog HanSkip 0,0; Delay 200; HanSkip 1,1,1,1,1,1,0,1,1,1,1,1,1,1,1
}

; EOF V2



