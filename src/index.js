import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import Header from "./components/Header";
import Newproducts from "./components/Newproducts";

// import Upcomingproduct from "./components/Upcomingproducts";

class App extends React.Component{
  render(){
  return (
    <>
      <Header />
      <div className="main-container">
        <Newproducts />
      </div>
    </>
  );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
