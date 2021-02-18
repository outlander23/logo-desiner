import React,{Component} from 'react';

import { Link, animateScroll as scroll } from "react-scroll";
class Navlist extends Component{
	
	
	render(){
	
	const {label,link}=this.props;
	
	return (
			<li className="nav-item nav-link">
			<Link 
				activeClass="active" 
				to={link} spy={true} 
				smooth={true} 
				duration={1000}>
         	<span>{label}</span>
        	</Link>
			</li>
		);
	}
}
export default Navlist;
