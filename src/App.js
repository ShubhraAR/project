import './App.css';
// import image from './sdm.jpg';
import ArrowFunction from './component/ArrowFunction';
import Shubhra from './component/shubhra.jsx';
import ArrayMethods from './component/ArrayMethods.jsx';
import Spreadoperator  from './component/Spreadoperator.jsx';
import Destructuring from './component/Destructuring.jsx';
import Ternaryop from './component/Ternaryop.jsx';
// import Imp from './component/imp.jsx';
import Home from './component/Home.jsx';
import Props from './component/props.jsx';
import Table from './component/table.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Complx from './component/complx.jsx';
import BasicButtons from './component/BasicButton.jsx';
import State from './component/State.jsx';
import Effect from './component/Effect.jsx';
import LocalStorage from './component/LocalStorage';
import Api from './component/Api.jsx';
import Card from './component/card.jsx';
function App(){

return (
  <center><div style={{backgroundColor:'pink'}}>
       <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/> 
      <Route exact path="/Arrow" element={<ArrowFunction/>}/>
      <Route exact path="/Array" element={<ArrayMethods/>}/>
      <Route exact path="/Destruct" element={<Destructuring/>}/>
      <Route exact path="/ternary" element={<Ternaryop/>}/>
      <Route exact path="/spread" element={<Spreadoperator/>}/>
      <Route exact path="/Shubhra" element={<Shubhra/>}/>
      {/* <Route exact Path="/Imp" element={<Imp/>}/> */}
      <Route exact path="/props" element={<Props/>}/>
      <Route exact path="/table" element={<Table/>}/>
      <Route exact path="/complx" element={<Complx/>}/>
      <Route exact path="/button" element={<BasicButtons/>}/>
      <Route exact path="/state" element={<State/>}/>
      <Route exact path="/Effect" element={<Effect/>}/>
      <Route exact path="/LocalStorage" element={<LocalStorage/>}/>
      <Route exact path="/Api" element={<Api/>}/>
      <Route exact path="/Card" element={<Card/>}/>
      </Routes>
    </BrowserRouter>
       </div></center>
)}
export default App;
