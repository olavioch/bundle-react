import React, {Component} from "react";
import {Link} from "react-router-dom";

class Home extends Component{
	render(){
		return(
			<div>
				<h1> Aqui tem uma pagina Home</h1>
				<Link to="/sobre">Ir para a pagina sobre</Link>
			</div>
		);
	}
}
export default Home;