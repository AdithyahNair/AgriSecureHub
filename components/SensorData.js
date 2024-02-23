import { useEffect, useState } from "react";
import { db, ref, onValue } from "../firebase";

const SensorData = () => {
  const [temp, setTemp] = useState(1);
  const [humid, setHumid] = useState(2);

  useEffect(() => {
    const data = ref(db);
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
