import React from "react";
import SensorData from "./SensorData";

const DisplaySensorData = ({ temp, humid }) => {
  return (
    <div>
      <p>Temperature: {temp}</p>
      <p>Humidity: {humid}</p>
    </div>
  );
};

export default DisplaySensorData;
