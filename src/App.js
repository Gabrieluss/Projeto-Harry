import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Projetos from './components/Projetos/Projetos';
import Sobre from './components/Sobre/Sobre';
function App(){


return (
  <div className='App'>
  <Main/>
  <Footer/>
  <Sobre/>
  <Projetos/>
  </div>
);
}

export default App;