import React, { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5070/?message=Hello%20from%20React")
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <p>Message from Backend: {message}</p>
    </div>
  );
};

export default Home;
