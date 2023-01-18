import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Category from './components/Category';
import CartContextProvider from './context/CartContextProvider';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route element={<CartContextProvider />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;