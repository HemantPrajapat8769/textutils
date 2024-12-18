
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// import Textforms from './components/Textforms';
function App() {
  const [mode, setMode]= useState("light")
  const [alert,setAlert] = useState('null')
  const showAlert=(message,type) =>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }
             
  // const removebodyClass=()=>{
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  // }
  const togglemode= (cls)=> {
    // removebodyClass();
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){
    setMode("dark");
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success")
    // document.title='TextUtils- Dark Mode';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success") 
      // document.title='TextUtils- Light Mode';   
    }
  }
  return (
    <>
     <Router>
     <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
     <Alert alert={alert}  mode={mode}/>
     <div className='container my-3'>
     <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
         <Route exact path="/" element={<Textforms showAlert={showAlert} heading='Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces' mode={mode} />} />
     </Routes>
     </div> 
     </Router>
      
     
    </>
  );
}

export default App;
