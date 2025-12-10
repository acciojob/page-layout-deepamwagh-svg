import React from "react";
import "./../styles/App.css";
import Pagelayout from "./Pagelayout";

const App = () => {
  return (
    <Pagelayout
      header={<h1>Welcome to my website</h1>}
      footer={<p>© 2023 My Website. All rights reserved.</p>}
    >
      <p>This is the content of my website..</p>
    </Pagelayout>
  );
};

export default App;
