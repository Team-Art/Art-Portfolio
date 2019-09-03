import React from 'react';
import TabNav from './components/TabNav';
import CharacterList from './components/CharacterList';
import Footer from './components/Footer';
import { Route } from "react-router-dom";
import PostList from './components/PostList';
import './App.css';
import SignInForm from "./components/SignIn/SignInForm";
import SignUpForm from "./components/SignUp/SignUpForm";
import  Profile from "./components/SignIn/Profile";

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
      <Route path="/Profile" render={props => (<Profile {...props} />)}/>
      <Footer/>
    </main>
    </section>
  );
}

export default App;





