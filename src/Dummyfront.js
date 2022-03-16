import {useState} from 'react';
import myanime from './images/use.png'
import useexport from './images/useexport.gif'


function Dummyfront(view) {
   
    const [myannime, setMyanime] = useState(myanime);
   

    
    return (  
       
        <div>
            
            <div id="lower" >
                <div className='lowerbutton'>
                    <span><button type="button" className='buttton' onClick={()=>setMyanime(useexport)}>HOBBIES</button></span>
                    <span><button type="button" className='buttton' onClick={()=>alert('coming soon')}>GAME</button></span>
                </div>
                <img src={myannime} alt="thats my hobbies" className="anime"></img>
            </div>

        </div>
    );
}

export default Dummyfront;