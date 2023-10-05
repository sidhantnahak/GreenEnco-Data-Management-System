import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Sidebar from "./Components/Sidebar/Sidebar";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getall_data } from './Redux/dataAction';


function App() {
  const dispatch=useDispatch();

  const {error}=useSelector(state=>state.alldata)
  
  useEffect(() => {
    dispatch(getall_data())
    if(error){
      dispatch(clearErrors())
    }
    
  }, [dispatch])
  
  return (
    <>
      <BrowserRouter>

        <Sidebar />
      </BrowserRouter>

    </>

  );
}

export default App;
