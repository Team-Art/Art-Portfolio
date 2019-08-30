import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import Logo from "./Logo.svg";
import "./TabNav.css"

//**************************************************** */	

const signupbtn ={
	border:"1.5px solid #B66CFF",
	display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "130px"
}

const mainMenu={
	display: "flex",
    justifyContent:"center",
    fontSize: "1.3rem",
	background: "#f8f8f8",
	marginBottom: "140px",
}

const logoText={
	fontFamily: "Montserrat, sans-serif",
	fontSize: "48px",
    color: "#7900F2",
	fontWeight: "800",
	fontStyle: "normal",
	marginRight: "580px",
}

const logo={
	width:"37px",
	height:"51px",
	marginTop: "21px",
    marginRight: "30px"
}

//***************************************************** */


export default class MenuExampleSecondary extends Component {
	state = { activeItem: 'Home' }
  
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
	render() {
	  const { activeItem } = this.state
  
	  return (
		
		  <Menu secondary style={mainMenu}>
			
			<img src={Logo} style={logo}  alt="logo" />
            <h2 style={logoText}>Art Portfolio</h2>
		  <Menu.Item className="menu-text"
			name='Browse'
			active={activeItem === 'Browse'}
			onClick={this.handleItemClick}
		  />
		  <Menu.Item className="menu-text"
		  	as={Link}
		  	to="/"
			name='Home'
			active={activeItem === 'Home'}
			onClick={this.handleItemClick}
		  />
		  <Menu.Item className="menu-text"
			as={Link}
			to="/SignIn"
			name='Sign In'
			active={activeItem === 'Sign In'}
			onClick={this.handleItemClick}
		  />
			<Menu.Item className="menu-text"
			as={Link}
			to="/SignUp"
			style={signupbtn}
			name='Sign Up'
			active={activeItem === 'Sign up'}
			onClick={this.handleItemClick}
		  />
		 
		</Menu>
	  )
	}
  }
  