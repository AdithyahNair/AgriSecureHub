#include <Arduino.h>           
#include <ESP8266WiFi.h>      
#include <Firebase_ESP_Client.h>
#include <DHT.h>                

#define DHT_SENSOR_PIN 4
#define DHT_SENSOR_TYPE DHT11

DHT dht_sensor(DHT_SENSOR_PIN, DHT_SENSOR_TYPE);

#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

#define WIFI_SSID "Adistein14pro"
#define WIFI_PASSWORD "00000000"

#define ADDRESS "0xD002c7a79F88332150BA003045Ef3C334ad6Cb7F" // contractAddress (change as per sensor usage)

#define API_KEY "AIzaSyBeT2sbKUepAzBVrmakBgl9qBO36b1xfQk"  
#define DATABASE_URL "https://agrihub-dafcf-default-rtdb.asia-southeast1.firebasedatabase.app/" 


FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
int count = 0;
bool signupOK = false; 

void setup(){
  dht_sensor.begin();

  Serial.begin(9600);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();


  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("ok");
    signupOK = true;
  }
  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  config.token_status_callback = tokenStatusCallback; 
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  delay(2000);
}

void checkValueExists(float temperature, float humidity, String tPath, String hPath) {
  if(Firebase.RTDB.getInt(&fbdo,hPath.c_str())) {
    Firebase.RTDB.setFloat(&fbdo, hPath.c_str(), humidity);
    Firebase.RTDB.setFloat(&fbdo, tPath.c_str(), temperature);
  } else {
    Firebase.RTDB.pushFloat(&fbdo, hPath.c_str(), humidity);
    Firebase.RTDB.pushFloat(&fbdo, tPath.c_str(), temperature);
  }

  Serial.print("Temperature : ");
  Serial.println(temperature);

  Serial.print("Humidity : ");
  Serial.println(humidity);
}

void loop(){

  float temperature = dht_sensor.readTemperature();
  float humidity = dht_sensor.readHumidity();

  String hPath = "SensorData/" + String(ADDRESS) + "/humidity";
  String tPath = "SensorData/" + String(ADDRESS) + "/temperature";

  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 1000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();
    checkValueExists(temperature, humidity, tPath, hPath);
    delay(2000);
  }
}