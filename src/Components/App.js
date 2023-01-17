
import Navbar from "./Navbar";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Main/>
      </BrowserRouter>
      
    </>
  
  );
}

export default App;
