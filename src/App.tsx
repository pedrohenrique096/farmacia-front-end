
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';


function App() {
  
  return (
    <>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<ListaCategoria />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              {}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;