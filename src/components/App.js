import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return ReactDOM.render(
    <div>
      <p>
        Now I can render any React component on any DOM node I want using
        ReactDOM.render
      </p>
    </div>,
    document.getElementById("root")
  );
};

export default App;
