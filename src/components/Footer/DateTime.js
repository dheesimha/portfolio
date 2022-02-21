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
    <div className="DateTime">
      <p className="time">{time}</p>
      {/* Credits : Home page image : <a href="https://www.freepik.com/vectors/coder">Coder vector created by upklyak - www.freepik.com</a> */}
    </div>
  );
}

export default DateTime;
