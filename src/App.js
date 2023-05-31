import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Section2 from './components/Section2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header />
      </div>
      <Section />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
