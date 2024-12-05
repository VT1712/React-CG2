// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Timer = () => {
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("Tung");
  const [count, setCount] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
      setCount((count) => count - 1);
      if (count === 0) {
        alert("time is up ");
        setCount(10);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [message, count]);

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <p>Count: {count}</p>
    </div>
  );
};

export default Timer;
