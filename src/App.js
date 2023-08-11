import SubmitForm from './components/SubmitForm';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [firstName, setFirstName]=useState("")
  const [lastName, setLastName]=useState("")
 
  return (
    <div className="App">
      <SubmitForm setLastName={setLastName} setFirstName={setFirstName} />
      <span>{firstName}</span>
      <br/>
      <span>{lastName}</span>
      {/* <ul>
        <li>create a form,submit,search</li>
        <li></li>
      </ul> */}
    </div>
  );
}

export default App;
