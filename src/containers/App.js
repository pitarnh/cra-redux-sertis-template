import React from "react";
import logo from "../assets/images/sertis-logo.png";
import {Counter} from "../components/Counter";
import "./App.scss"

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Counter />
				<p>
					Edit <code>src/containers/App.js</code> and save to reload.
				</p>
			</header>
		</div>
	);
}

export default App;
