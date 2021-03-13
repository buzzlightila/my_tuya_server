#### My Tuya
Simple tuya server to control Smart Devices.
###### Config
```
    cp .env.example .env
```
###### Install
```
    npm install
```

###### Run
```
    npm run dev
```
###### Test
```
curl --request POST \
  --url http://localhost:8080/deviceId-123 \
  --header 'Content-Type: application/json' \
  --data '{ "code":"switch_led", "value": true }'
```