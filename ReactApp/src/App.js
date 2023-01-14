
import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Se importan los componentes creados y se renderizan dentro del return de App.
function App() {

  // const task = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 2000);
  // });

  // task.then(result => {
  //    result = JSON.stringify(movies);
  // })

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;