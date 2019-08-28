import React from 'react';
import TabNav from './components/TabNav'
import CharacterList from './components/CharacterList'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from './components/PostList';
import './App.css';
import SignInForm from "./components/SignIn/SignInForm"
import SignUpForm from "./components/SignUp/SignUpForm"


function App() {
  return (
    <main >
      <TabNav/>
      <Route exact path="/" component={CharacterList}/>
      <Route exact path='/post/:photoId' render={props=> (<PostList {...props}/>)}/>
      <Route path="/SignIn" component={SignInForm}/>
      <Route path="/SignUp" component={SignUpForm}/>
      {/* <CharacterList /> */}
      <Footer/>
    </main>
  );
}

export default App;





