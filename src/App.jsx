import React from "react";

import Form from "./components/Form";
import Hover from "./components/Hover";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  };

  return (
    <main style={styles}>
      <Form />
      <Hover />
      <List />
      <Search />
    </main>
  );
}

export default App;
