; only work with mqtt
>S

if (upsecs%57==0 and cnt>51)
{
;
if (mqtts>0)
{
print mqtt: OK
}
else
{
print mqtt: error
=>Restart 1
}
;

; (...)

; eof
