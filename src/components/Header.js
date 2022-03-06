import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { BiSearch, BiUserCircle } from 'react-icons/bi';
import { BsMessenger } from 'react-icons/bs';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { FiUsers, FiBell } from 'react-icons/fi';
import { MdOndemandVideo } from 'react-icons/md';
import HeaderIcon from './HeaderIcon';

const Component = () => {
  //Hooks
  const navigate = useNavigate();
  const location = useLocation();
  
  //States
  const [active, setActive] = useState('');
  
  useEffect(() => {
    setActive(location.pathname.replace('/',''));
  }, [location.pathname, active]);
  
  return<>
    <div className="sticky top-0 bg-white p-1 max-w-2xl overflow-hidden z-50">
      {/*Topbox*/}
      <div className={ active !== 'home' ? "flex items-center overflow-hidden mb-0 max-h-0" : "flex items-center overflow-hidden mb-2"}>
        {/*Left*/}
        <div className="flex items-center px-2 grow">
          <img className="h-8" src="fblogo.png" alt="logo"/>
        </div>
        
        {/*Right*/}
        <div className="flex items-center space-x-2">
          <div className="flex items-center p-2 bg-gray-100 rounded-full">
            <BiSearch className="text-xl" />
          </div>
          <div className="flex items-center p-2 bg-gray-100 rounded-full">
            <BsMessenger className="text-xl" />
          </div>
        </div>
        
      </div>
      
      {/*bottombox*/}
      <div className="grid grid-cols-6">
        <HeaderIcon active={active} navigate={navigate} to="home" Icon={AiFillHome}/>
        <HeaderIcon active={active} navigate={navigate} to="friends" Icon={FiUsers}/>
        <HeaderIcon active={active} navigate={navigate} to="videos" Icon={MdOndemandVideo}/>
        <HeaderIcon active={active} navigate={navigate} to="profile" Icon={BiUserCircle}/>
        <HeaderIcon active={active} navigate={navigate} to="notifications" Icon={FiBell}/>
        <HeaderIcon active={active} navigate={navigate} to="menu" Icon={AiOutlineMenu}/>
      </div>
    </div>
    
    <Outlet/>
  </>
}

export default Component;