#include <Arduino.h>
#include <ESP8266WiFi.h>     
#include <Firebase_ESP_Client.h>
#include <DHT.h>               

#define DHT_SENSOR_PIN 4
#define DHT_SENSOR_TYPE DHT11

DHT dht_sensor(DHT_SENSOR_PIN, DHT_SENSOR_TYPE);

#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

#define WIFI_SSID "iphone"
#define WIFI_PASSWORD "iphone"

#define API_KEY "AIzaSyBeT2sbKUepAzBVrmakBgl9qBO36b1xfQk"

#define DATABASE_URL "https://agrihub-dafcf-default-rtdb.asia-southeast1.firebasedatabase.app/" 

FirebaseData fbdo;
FirebaseConfig config;
FirebaseAuth auth;

void setup(){
  dht_sensor.begin();

  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");

  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(300);
  }

  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  config.token_status_callback = tokenStatusCallback; 
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop(){

  float temperature = dht_sensor.readTemperature();
  float humidity = dht_sensor.readHumidity();
  
  if (Firebase.ready()){
    Firebase.RTDB.setInt(&fbdo, "/temperature", temperature);
    Firebase.RTDB.setFloat(&fbdo, "/humidity", humidity);
  }

}