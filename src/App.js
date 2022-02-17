import { Routes, Route } from 'react-router-dom'
import './App.css';
import Scoreboard from './components/Scoreboard';
import Admin from './components/Admin';

                                                              /* // TO DO LIST

  // Style 
    // Grab some background images.
    // some sports Icons i.e. football, goalpost, etc

  // Add a temp Auth
    //https://reactrouter.com/docs/en/v6/examples/auth
  // REAL AUTHS
    // Maybe FACEBOOK
      // https://developers.facebook.com/docs/facebook-login/
    //or Microsoft Azure
      // https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization

  // 

                                                              // END TO DO LIST    */


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Scoreboard />} />
        <Route path='admin' element={<Admin />} />
      </Routes>
    </div>
  );
}
