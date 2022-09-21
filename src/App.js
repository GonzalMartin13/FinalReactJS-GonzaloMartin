import './App.css';
import "./components/Compo.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import Ingreso from "./components/ingreso";
import ITC from "./components/ITC";
import IDC from "./components/IDC";
import Header from './components/Header';

function App () {
  return (
    <BrowserRouter>
    <Header/>
      <div className='d-flex'>
        <div className='col-6'><Ingreso/></div>
        <div className='col-6 ITC'>
          <Routes>
            <Route path="/" element={<ITC/>}/>
            <Route path="/:id" element={<IDC/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
