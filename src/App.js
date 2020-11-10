import React from "react";
import { Services } from "./pages/Services";
import { Home } from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/services" component={Services} />
					<Route path="/contact" component={Services} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
