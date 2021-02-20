import React, { Component } from "react";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/navBar";
import HomePage from "./HomePage/homePage";
import Footer from "./Footer/footer";
import About from "./About/About";
import Work from "./Work/work"
import "./App.css";


class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<div className="App">



					<Switch>
						<Route path="/about" component={About} />
						<Route path="/work" component={Work} />
						<Route path="/" component={HomePage} />
					</Switch>


				</div>
				<Footer />
			</>



		);
	}
}

export default App;
