import {useState} from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);



  return (
    <div>
      <h1>Counters that update together</h1>
    </div>
  );
}
