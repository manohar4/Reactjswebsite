import React from 'react';
import Blockcontent from './Blockcontent';
import value from './EveryPage';
import {useState,useEffect} from 'react';
import { Navigate } from 'react-router';




function Block({disvalue}) { 

  
   
 
return(
    
        <div className='mainframe' >
            <div className='centerdivmain'>
                <Blockcontent disvalue={disvalue}/>
            </div>
        </div>




);}


export default Block;