
/**
 * ?  =====Import Components=====
 */
import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Components/Create/Create';
import View from './Pages/ViewPost'
import {authContext,firebaseContext} from './store/Context'
import './App.css';
import Home from './Pages/Home';
import Post  from './store/PostContext';



function App() {
  const {setUser} = useContext(authContext)
  const{firebase} = useContext(firebaseContext)
useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
     setUser(user)
  })
})
  return (
    <div>
      <Post>
          <Router>
            <Route  exact path='/'>
            <Home />  
            </Route>
            <Route path='/signup'>
            <Signup />  
            </Route>
            <Route path='/login'>
            <Login/>  
            </Route>
            <Route path='/create'>
            <Create/>  
            </Route>
            <Route path='/view'>
            <View/>  
            </Route>
         </Router>
        </Post>
    </div>
  );
}

export default App;
