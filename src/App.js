import './App.css';
import Home from './components/Home';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
