import { useEffect, useState } from "react";
import { db, ref, onValue } from "../firebase";

const SensorData = (props) => {
  const [temp, setTemp] = useState(null);
  const [humid, setHumid] = useState(null);
  const address = props.address;
  var tLower = props.tLower;
  var tHigher = props.tHigher;
  var hLower = props.hLower;
  var hHigher = props.hHigher;

  useEffect(() => {
    const data = ref(db, "/SensorData/" + address);
    onValue(data, (snapshot) => {
      if (snapshot.val() != null) {
        setTemp(snapshot.val().temperature);
        setHumid(snapshot.val().humidity);
      }
    });
  }, [db]);

  var conditionStatus =
    tLower <= temp && temp <= tHigher && hLower <= humid && humid <= hHigher;

  return temp == null ? (
    <b style={{ color: "red", fontSize: 16 }}>Sensors Not Activated</b>
  ) : conditionStatus ? (
    <b style={{ fontSize: 16, color: "green", wordSpacing: "15px" }}>
      {temp + "°C " + humid + "%"}
    </b>
  ) : (
    <b style={{ color: "red", fontSize: 16 }}>
      Contract integrity has been breached.
    </b>
  );
};

export default SensorData;
