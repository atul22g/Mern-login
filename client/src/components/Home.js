import React, { useState, useEffect } from "react";
const BackendURL = process.env.REACT_APP_BackendURL;

const Home = () => {
  const [userName, setUserName] = useState({});
  const [show, setShow] = useState(false);
  const userHome = async () => {
    try {
      const res = await fetch(BackendURL+"/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log("UserName ======="+ data);
      setUserName(data.name)
      setShow(true);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
        // Navigate("/");
      }
    } catch (error) {
      // console.log("No Token Found");
    }
  };
  useEffect(() => {
    userHome();
  }, []);
  return (
    <>
      <section className="dflex">
        <main role="main" className="inner cover">
       <h2>{show ? "Hello," : "WELCOME To My Project"}</h2>
       <h1>{show ? userName : ""}</h1>
       <h2>{show ? "Happy to See You Back" : "By Atul"}</h2>
        </main>
      </section>
    </>
  );
};

export default Home;
