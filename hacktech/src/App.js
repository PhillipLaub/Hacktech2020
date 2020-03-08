import React from "react";
import "./App.css";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";

//Links/Routes
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Landing />
  </div>
);

export default App;
