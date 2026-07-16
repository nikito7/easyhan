# Homey Pro

https://homey.app/

Requisitos:
- MQTT Broker (server)
- MQTT Client
- MQTT Hub (virtual devices)

# EB1 (monofásico)

```
{
  "measure_power": {
    "capability": "measure_power",
    "stateTopic": "tele/edpbox1/SENSOR",
    "setTopic": "",
    "valueTemplate": "EB1.API - EB1.APE",
    "outputTemplate": "",
    "displayName": "Power"
  },
  "meter_power.imported": {
    "capability": "meter_power.imported",
    "stateTopic": "tele/edpbox1/SENSOR",
    "setTopic": "",
    "valueTemplate": "EB1.TEI",
    "outputTemplate": "",
    "displayName": "Energy Import"
  },
  "meter_power.exported": {
    "capability": "meter_power.exported",
    "stateTopic": "tele/edpbox1/SENSOR",
    "setTopic": "",
    "valueTemplate": "EB1.TEE",
    "outputTemplate": "",
    "displayName": "Energy Export"
  }
}
```

# EB3 (trifásico)

```
{
  "measure_power": {
    "capability": "measure_power",
    "stateTopic": "tele/edpbox3/SENSOR",
    "setTopic": "",
    "valueTemplate": "EB3.API - EB3.APE",
    "outputTemplate": "",
    "displayName": "Power"
  },
  "meter_power.imported": {
    "capability": "meter_power.imported",
    "stateTopic": "tele/edpbox3/SENSOR",
    "setTopic": "",
    "valueTemplate": "EB3.TEI",
    "outputTemplate": "",
    "displayName": "Energy Import"
  },
  "meter_power.exported": {
    "capability": "meter_power.exported",
    "stateTopic": "tele/edpbox3/SENSOR",
    "setTopic": "",
    "valueTemplate": "EB3.TEE",
    "outputTemplate": "",
    "displayName": "Energy Export"
  }
}

# PV1

{
  "measure_power": {
    "capability": "measure_power",
    "stateTopic": "tele/pv1/SENSOR",
    "setTopic": "",
    "valueTemplate": "PV1.InputPower",
    "outputTemplate": "",
    "displayName": "Power"
  },
  "meter_power": {
    "capability": "meter_power",
    "stateTopic": "tele/pv1/SENSOR",
    "setTopic": "",
    "valueTemplate": "PV1.PV_Energy",
    "outputTemplate": "",
    "displayName": "Energy"
  }
}
```

_____
EOF
