import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Caalendar from './Calendar/Caalendar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Fulldetails from './Fulldetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path = "/" element = {<Caalendar/>}></Route>
          <Route path ="/Fulldetails" element = { <Fulldetails/> }></Route>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
