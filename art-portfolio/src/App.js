import React from 'react';
import TabNav from './components/TabNav'
import CharacterList from './components/CharacterList'
import Footer from './components/Footer'
import { Route } from "react-router-dom";
import PostList from './components/PostList';
import './App.css';
import SignInForm from "./components/SignIn/SignInForm"
import SignUpForm from "./components/SignUp/SignUpForm"


function App() {
  return (
    <section>
    <div >
         <TabNav/>
      </div>
    <main >
      
     
      <Route exact path="/" component={CharacterList}/>
      <Route exact path='/post/:photoId' render={props=> (<PostList {...props}/>)}/>
      <Route path="/SignIn" component={SignInForm}/>
      <Route path="/SignUp" component={SignUpForm}/>
      
      <Footer/>
    </main>
    </section>
  );
}

export default App;





