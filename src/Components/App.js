
import Navbar from "./Navbar";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <>
      <CustomProvider>
        <BrowserRouter>
          <Navbar/>
          <Main/>
        </BrowserRouter>
        <ToastContainer/>
      </CustomProvider>  
    </>
  
  );
}

export default App;
