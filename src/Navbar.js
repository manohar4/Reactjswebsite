import act from "./images/act.png";
import {useState,useEffect} from 'react';
import value from "./EveryPage";
import Block from "./Block";
import { NavLink,Navigate } from "react-router-dom";





function Navbar({view2,devclick}) {
    const [disable, setDisable] =useState(false);
    const [Hide, setHide] = useState(true);
    const[devstyle,setDevstyle]=useState();
  
    var set=()=>{
         setDevstyle({
            backgroundImage: "url(" + act + ")",
            animation: 'jump  0.75s ease-in-out forwards',
         })
        return ( 
            setHide(false)
         );
    } 
    const setagain=()=>{
        setDevstyle();

        document.getElementById('dev_photo').style.animation=null;
        return(setHide(true))

    }  
    return (  
        
        <div className='container'>
            <NavLink to='/aboutme'>
            <div id="dev_photo" disabled={disable} style={devstyle} onClick={() => {setDisable(true);set();devclick()}}>
            <div className="dropdown" style={{ display: Hide ? 'none' : 'block' }}>
                <div className="dropdown-content">
                   <NavLink to='/'><a onClick={()=>{setagain();}}>Home</a></NavLink>
                    <NavLink to='/aboutme'><a>About me</a></NavLink>
                    <NavLink to='/works'><a>Works</a></NavLink>
                    <NavLink to='/certificates'><a>certificates</a></NavLink>
                    <NavLink to='/skills'><a>Skills</a></NavLink>
                   
                </div>
            </div>
            </div>
            </NavLink>
            
        <span className='devinfo' style={{ display: Hide ? 'block' : 'none' }}>
                <h1 style={{ fontSize: '3vw', margin: '10px 0 0 0' }}>Pavan Sai Rapeti</h1>
            </span><span className='devinfo' style={{ display: Hide ? 'block' : 'none' }}>
                <h1 style={{ fontSize: '2vw', margin: 0 }}> React js Developer</h1>
            </span>
            </div>
    );
}

export default Navbar;