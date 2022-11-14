import React from 'react'
import '../../styles/device.css'
import {AiFillHome} from 'react-icons/ai'
import {GrUserSettings} from 'react-icons/gr'
import {GoGraph} from 'react-icons/go'
import {FaSignOutAlt} from 'react-icons/fa'
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import {Adminmetrics} from './Adminmetrics'
import {AdminHome} from './AdminHome'

const SideBar = () => {
  return (
    <>
      <div>
        <Link to="/adminhome"> <AiFillHome style={{ fontSize: '32px' }}/> </Link>
      </div> <br/>
      <div>
        <Link to="/adminmetrics"> <GoGraph style={{ fontSize: '32px' }}/> <br/> </Link>
      </div> <br/>
      <div>
        <Link to="/addclients"> <GrUserSettings style={{ fontSize: '31px' }}/> </Link>
      </div>
      <div> <br/>
        <Link to= "/"> <FaSignOutAlt style={{ fontSize: '31px' }}/> </Link>
      </div>
    </>
  );
};


export const Admin = () => {
  return (
      <div style={{display: 'flex'}}>
        <div className='sidebar'>
          <SideBar />
        </div>
        <div className='adminbody'>        
          <Router>
            <Route path="/addclients"> Admin adds clients here </Route>
            <Route path="/adminmetrics-payment" element={<Adminmetrics/>} />
            <Route path="/adminhome" element ={<AdminHome/>}/>
          </Router>
          </div>
      </div>
  );
}

