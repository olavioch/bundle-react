import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Sobre  from './pages/Sobre/Sobre';
import Config from './Config';
class App extends Component{
	render(){
		return(
				<BrowserRouter basename={Config.BASE_URL}>	
					<div>
						<Header />
						<Route exact path="/"  component={Home} />
						<Route path="/sobre" component={Sobre} />
					</div>
				</BrowserRouter>
		);
	}
}
export default App;