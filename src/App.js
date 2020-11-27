import logo from './logo.svg';
import './App.css';
import Home from './components/homecomponent/home';
import Homecard from './components/homecard/homecard';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import HomeCard from './components/homecard/homecard';
import LoginForm from './components/loginform/loginform';
import RegisterForm from './components/registerForm/registerForm';
import RegistroComidaForm from './components/registroComidaForm/registroComidaForm';


function App() {
  return (
    <Router>

      <Switch>

        <Route path="/home"> 
          <Home component={<HomeCard></HomeCard>}>           
          </Home>
        </Route>

        <Route path="/login">
          <Home component={<LoginForm></LoginForm>}></Home>
        </Route>

        <Route path="/register">
          <Home component={<RegisterForm></RegisterForm>}></Home>
        </Route>

        <Route path="/registrocomida/new">
          <Home component={<RegistroComidaForm></RegistroComidaForm>}></Home>
        </Route>
      
      </Switch>
     
    </Router>
    
  );
}


export default App;
