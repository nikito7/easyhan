```
docker exec -it homeassistant /bin/bash
```

```
find / -name register_read_message*
```

4 or 12 (it may make HA slow)
![rtu tweak](./rtu-tweak.jpg)

---

```
#! /bin/bash

echo "This script is executed in the homeassistant container"; 
env;
# Check if the file needs to be modified
cat /usr/local/lib/python3.11/site-packages/pymodbus/register_read_message.py  | grep "return 1 + 1 + 2 \* self.count"
if [ $? -eq 0 ]
then
	echo "Going to replace and restart"
	sed -i 's/return 1 + 1 + 2 \* self.count/return 1 + 1 + 4 \* self.count/g' /usr/local/lib/python3.11/site-packages/pymodbus/register_read_message.py 
	rm -rf  /usr/local/lib/python3.11/site-packages/pymodbus/__pycache__/
	sleep 5
	# Reboot the home assistant
#	reboot
	curl -X POST -H "Authorization: Bearer <colocar_Aqui_token_do_home_assistant_para_reiniciar>" -H "Content-Type: application/json" -d '{}' http://localhost:8123/api/services/homeassistant/restart	
else
	echo "All ok"
fi
```


