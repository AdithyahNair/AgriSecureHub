import { useEffect, useState } from "react";
import { db, ref, onValue } from "../firebase";

const SensorData = (props) => {
  const [temp, setTemp] = useState(null);
  const [humid, setHumid] = useState(null);

  const address = props.address;

  useEffect(() => {
    const data = ref(db, "/SensorData/" + address);
    onValue(data, (snapshot) => {
      setTemp(snapshot.val().temperature);
      setHumid(snapshot.val().humidity);
    });
  }, [db]);

  return (
    <b style={{ fontSize: 16, color: "green", wordSpacing: "15px" }}>
      {temp + "°C " + humid + "%"}
    </b>
  );
};

export default SensorData;
