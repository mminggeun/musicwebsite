import './App.css'
import { BrowserRouter as   Router, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Kballad from './genre/Kballad';
import Wpop from './genre/Wpop';
import Kdanelec from './genre/Kdanelec';
import Krnb from './genre/Krnb';
import Kindi from './genre/Kindi';
import Khiphop from './genre/Khiphop';
import Whiphop from'./genre/Whiphop';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/kballad" element = {<Kballad/>} />
          <Route path="/wpop" element = {<Wpop/>} />
          <Route path="/kdanelec" element = {<Kdanelec/>} />
          <Route path="/krnb" element = {<Krnb/>} />
          <Route path="/kindi" element = {<Kindi/>} />
          <Route path="/khiphop" element = {<Khiphop/>} />
          <Route path="/whiphop" element = {<Whiphop/>} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
