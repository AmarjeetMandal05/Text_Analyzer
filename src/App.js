
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";

// ...

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
function App() {
  const [mode , setMode] = useState("light");
  const [alert , setAlert] = useState(null);

  const showAlert =(message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const toggleMode=(cls)=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Has Been Enabled" , "success")
      document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        document.title = "Install TextUtils Now"
      }, 2000);
      setInterval(() => {
        document.title = "Hurrry Up!! Limited offer"
      }, 5000);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enabled" , "success")
      document.title = "TextUtils - Light Mode"


    }
  }
  return (
    <>
    <Router>

    <Navbar title = "TextEditor" mode ={mode}  toggleMode ={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
    
            <Route exact path="/">
            <TextForm heading = "Enter the text to analyze : " mode= {mode} showAlert={showAlert} />
            </Route>
      </Switch>  

    {/* <TextForm heading = "Enter the text to analyze below" mode= {mode} showAlert={showAlert} />
    <About/> */}

    </div>
    </Router>
    </>
  );
}

export default App;
