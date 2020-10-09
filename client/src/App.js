import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import StartPage from "./pages/StartPage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Router>
      <div className="container" style={{fontSize: "16px"}}>
        <Nav />
        <Route exact path="/" component={StartPage} />
        <Route exact path="/chat" component={ChatPage} />
      </div>
    </Router>
  );
}

export default App;
