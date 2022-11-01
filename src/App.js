import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import img from './nidhal.jpg'

function App() {
  const fullName= "Nidhal Saidane";
  const bio= "im an elechtromechanical engineer with 3 years of experience ";
  const profession= "Electro-mechanical engineer";
  const  alertMe = () => alert(`hello,${fullName}`);
  return (
    <div className="App">
      <header className="App-header">
      <Profile fullName={fullName} bio={bio} profession={profession} alertMe={alertMe} >
        <img src={img} style={{width:"250px"}} alt="Profile"/>
      </Profile>
      </header>
    </div>
  );
}

export default App;
