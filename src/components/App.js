import React from "react";
import PageLayout from "./PageLayout";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      <PageLayout
        header={<h1>This is the header of my website.</h1>}
        footer={<p>©2023 My Website. All rights reserved.</p>}
      >
        <p>This is the content of my website.</p>
      </PageLayout>
    </div>
  );
};

export default App;
