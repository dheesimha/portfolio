import React, { useState, useEffect } from "react";
import "./DateTime.css";

function DateTime() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      setTime(d.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div class="DateTime">
      <p class="time">{time}</p>
    </div>
  );
}

export default DateTime;
