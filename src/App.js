import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
   
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Add/>}/>
              <Route path='/View' element={<View/>}/>
              <Route path='/Edit/:id' element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
   
  );
}

export default App;