import "./App.css";

import React from "react";

function DemoComponent(props) {
  return (
    <div>
      {/*accessing information from props */}
      <h2>Hello {props.user}</h2>
      <h3>Welcome to GeeksforGeeks</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <DemoComponent user="Devon McGrath" />
    </div>
  );
}

export default App;
