
import './App.css';
import Heading from './components/heading/Heading';
import Products from './components/products/Products';
import Testimonials from './components/testimonials/Testimonials';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Heading />
      <Products />
      <Testimonials />



    </div>
  );
}

export default App;
