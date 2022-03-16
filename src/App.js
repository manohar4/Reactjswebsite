
import './App.css';
import React,{Component} from 'react';
import Block from './Block';

import Dummyfront from './Dummyfront';
import Navbar from './Navbar';
import value from './EveryPage';

import {Routes,Route,Navigate} from 'react-router-dom';
let count =0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
        pageone:  "",
        disvalue: value[0],
        clicked:'false'
    }
}



  NoMatch=()=><h1>PAGE IS NOT THERE 404 ERROR</h1>


 
devclick=()=>{
  if(count===0){
   count=count +1;
 
  }
  }
  render() { 
  return (
    
      <div className="App" >
       
      <Navbar view2={this.view2} devclick={this.devclick}/>
 
      
      <Routes>
        <Route path='/' element={<div><Dummyfront /></div>} />
        <Route path='/aboutme' element={<Block disvalue={this.state.disvalue.aboutme} />} />
        <Route path='/works' element={<Block disvalue={this.state.disvalue.works} />} />
        <Route path='/skills' element={<Block disvalue={this.state.disvalue.skills} />} />
        <Route path='/certificates' element={<Block disvalue={this.state.disvalue.certificates} />} />
        <Route path='*' element={<Navigate to='/' replace/>} />
      </Routes>
       
        </div>
      );
  }

}

export default App;
