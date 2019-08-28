import React, {Component} from "react";
// import { Tab, Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Input, Menu } from 'semantic-ui-react';
import Logo from "./Logo.svg";

// // TODO: Add missing tabs below
// export default function TabNav() {

// };
// const Nav = props => (
// 	<NavLink
// 		exact
// 		{...props}
// 		activeClassName="active"
// 	/>
// );
                                                   
// const createLabel = (labelText) => <span>{labelText}</span>

// const welcomeLabel = createLabel("Browse","Browse")
// const characterLabel = createLabel("Home", "Home")
// const locationLabel = createLabel("Sign In", "Sign In")
// const episodeLabel = createLabel("Sign Up", "Sign Up")

// const panes = [
// 	{ menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
// 	{ menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={characterLabel} /> },
// 	{ menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locationLabel} /> },
// 	{ menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes`} content={episodeLabel} /> }
// ]

// const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />



// export default TabNav
const Nav = props => (
		<NavLink
			exact
			{...props}
			activeClassName="active"
		/>
	);

//**************************************************** */	

const signupbtn ={
	border:"1.5px solid #B66CFF"
}

const mainMenu={
	display: "flex",
    justifyContent: "flex-end",
	fontSize: "1.3rem",
	':hover': {
		color: '#B66CFF'
	}
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
	state = { activeItem: 'home' }
  
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
	render() {
	  const { activeItem } = this.state
  
	  return (
		
		
	
		  
		<Menu secondary style={mainMenu}>
			
			<img src={Logo} style={logo} className="App-logo" alt="logo" />
            <h2 style={logoText}>Art Portfolio</h2>
		  <Menu.Item
			name='Browse'
			active={activeItem === 'Browse'}
			onClick={this.handleItemClick}
		  />
		  <Menu.Item
			name='Home'
			active={activeItem === 'Home'}
			onClick={this.handleItemClick}
		  />
		  <Menu.Item
			name='Sign In'
			active={activeItem === 'Sign In'}
			onClick={this.handleItemClick}
		  />
			<Menu.Item
			style={signupbtn}
			name='Sign Up'
			active={activeItem === 'Sign up'}
			onClick={this.handleItemClick}
		  />
		 
		</Menu>
	  )
	}
  }
  