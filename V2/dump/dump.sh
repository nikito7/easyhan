#!/bin/sh

x=0
while [ $x -le 6720 ]
do

echo "Line $x "

echo "\r" >> dump.txt
wget -q http://10.1.0.182/cm?cmnd=HanProfile+${x} -O - >> dump.txt

x=$(( $x + 1 ))
sleep 0.5

done
