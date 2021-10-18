import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './page/Home';
import Announcement from './components/Header/Announcement';
import Cart from './page/Cart';

function App() {
  return (
    <div className="App">
        <Announcement/>
        {/* <Cart/> */}
        <Home/>
    </div>
  );
}

export default App;
