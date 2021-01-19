import './App.css';
import Header from './component/Header';
import Carousel from './component/Carousel';
import Container from './component/Content/Container';
import Footer from './component/Footer';

function App() {
  return (
    <div className="baitap">
      <Header />
      <Carousel />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
