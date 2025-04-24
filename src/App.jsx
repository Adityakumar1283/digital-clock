import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [clock, setClock] = useState(new Date());
  const requestref = useRef();
  let date = new Date();

  // useEffect(() => {
  //   setInterval(() => {
  //     setClock((p) => p + 1);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    requestref.current = requestAnimationFrame(updateclock);

    return () => cancelAnimationFrame(requestref.current);
  });

  // function getdate() {
  //   let result = "";

  //   const date = new Date();

  //   let hr = date.getHours();

  //   const mm = date.getMinutes().toString().padStart(2, "0");

  //   const sec = date.getSeconds().toString().padStart(2, "0");

  //   let ampm = hr > 12 ? "PM" : "AM";

  //   hr = hr % 12 || 12;

  //   return `${hr}:${mm}:${sec} ${ampm}`;
  // }

  function updateclock() {
    setClock(new Date());
    requestref.current = requestAnimationFrame(updateclock);
  }

  return (
    <>
      <h1>Digital Clock </h1>

      {
         clock.toLocaleTimeString()
         
      }


      { //getdate()
      }

      
    </>
  );
}

export default App;
