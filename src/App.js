
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ResturantList from './Components/ResturantList';
import RestView from './Components/RestView';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<ResturantList/>}></Route>
      <Route path='/view_rest/:id' element={ <RestView/>}></Route>
      </Routes>
     
     
      <Footer/>
    </div>
  );
}

export default App;
