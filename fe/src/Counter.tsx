import { useEffect, useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    console.log("Connection established");
    const socket = new WebSocket("ws://localhost:8080");

    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData.type === "askCounter") {
        socket.send(
          JSON.stringify({
            type: "replyCounter",
            count: countRef.current,
          })
        );
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <div>Counter value is {count}</div>
      <button onClick={() => setCount((currentValue) => currentValue + 1)}>
        Increase count
      </button>
    </div>
  );
};

export default Counter;
