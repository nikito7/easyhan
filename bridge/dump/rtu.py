#!/usr/bin/python3

# load necessary Python modules
import crcmod
import time
import sys
import datetime
from os.path import exists
import os
import socket

### CHANGE TO MATCH YOUR SYSTEM ######################################

HOST       = '10.1.0.56'   # The remote host
PORT       = 9502          # The port to connect to
FILE_DIR   = "./"        # directory to save data

######################################################################

FILE_NAME     = (FILE_DIR +
                "{:0>2d}".format(datetime.datetime.today().year)  +
                "{:0>2d}".format(datetime.datetime.today().month) +
                ".txt")               # create a file name to save data locally

ser = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
ser.connect((HOST, PORT))

# open file to write data
try:
    load_map = open(FILE_NAME, "a+") # open file
except IOError:                      # error, report it
    sys.exit(-1)
load_map.seek(0, os.SEEK_SET)        # go to the first line of the file
first_line = load_map.readline()     # read the first line (headers)
if first_line == '':                 # if it is a new file, write headers on it
    load_map.write("year,month,day,hour,minute,+A,-A\n")
load_map.seek(0, os.SEEK_END)        # go to the end of the file

# configure CRC calculation
crc16 = crcmod.mkCrcFun(0x18005, rev=True, initCrc=0xFFFF, xorOut=0x0000)

# function to add CRC to command
def add_crc(data):
    # get CRC and return it in hex with 4 digits
    crc = "0x{:04x}".format((crc16(bytearray.fromhex(data))))
    return(data + crc[4:6] + crc[2:4])

# function to get register data
def get_data(data):
    cmd = bytearray.fromhex(add_crc(data))  # add CRC to the command
    got = 1                                 # main loop, get data
    while got:                              # loop until get valid response to command
        ser.sendall(cmd)     # write request to serial
        time.sleep(0.5)                     # wait a while before reading a modbus response...
        resp = ser.recv(1).hex()          # read 1 byte from the serial
        c = 0                               # counter to prevent looping forever
        while resp != data[0:2]:            # check up to 32 bytes if response comes from the right slave
            resp = ser.recv(1).hex()        # if not, keep reading serial buffer
            c += 1                          # prevent looping forever
            if c == 32:                     # there was a loop, start from beginning
                break
        resp = resp + ser.recv(1).hex()     # possibly found slave number response corret so add the command and check it
        if resp == data[0:4]:               # break the loop if the response includes the requested sent command
            resp = resp + ser.recv(1).hex()        # get how many bytes are there to retrieve
            get_more = int(resp[4:6], 16) + 2      # set the number of additional bytes to read and do it, includding CRC
            resp = resp + ser.recv(get_more).hex() # get the remaining data
            crc = crc16(bytearray.fromhex(resp))   # check CRC response sanity
            if crc == 0:                           # check if CRC is ok
                got = 0                            # got good data, break the main get data loop and return data
    ser.close()                              # close serial port
    return(resp)                             # return colected data

### ### ### 

# get the register to be read from command line
lpline = int(sys.argv[1])

if lpline < 1 or lpline > 7000:
    sys.exit("\nThe register number is out of range.\n")

cmd = "0145060000" + "{:04x}".format(lpline) + "01";
#cmd = "01440001";
print("Decimal: " + str(lpline) + " Hex: " + cmd);

# get data
reg  = []                        # set array to receive all requested data
resp = get_data(cmd)      # request last profile
reg.append(int(resp[ 6:10], 16)) # reg-0  last profile year
reg.append(int(resp[10:12], 16)) # reg-1  last profile month
reg.append(int(resp[12:14], 16)) # reg-2  last profile day
reg.append(int(resp[16:18], 16)) # reg-3  last profile hour
reg.append(int(resp[18:20], 16)) # reg-4  last profile minutes
reg.append(int(resp[32:40], 16)) # reg-5  last profile +A
reg.append(int(resp[56:64], 16)) # reg-6  last profile -A


# assemble data to be written to the file and sent via MQTT
msg = ("{:0>4d}".format( reg[0])  + "-" +
       "{:0>2d}".format( reg[1])  + "-" +
       "{:0>2d}".format( reg[2])  + "T" +
       "{:0>2d}".format( reg[3])  + ":" +
       "{:0>2d}".format( reg[4])  + "," +
       "{:0>12d}".format(reg[5])  + "," +
       "{:0>12d}".format(reg[6])
       )

print(msg);

load_map.write(msg + "\n")       # write data to the file
load_map.close()                 # close file


sys.exit(0)

# EOF


