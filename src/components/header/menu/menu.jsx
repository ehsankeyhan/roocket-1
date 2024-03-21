import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import MenuItem from './menuItem';

export default function Menu() {
  const [navPosition, setNavPosition] = useState();
  const [activeTabWidth, setActiveTabWidth] = useState(); 
  const [showActive, setShowActive] = useState(false);
  const location = useLocation();
  const locationPath = location.pathname.split('/');

  useEffect(()=>{
    let locationString;
    let navElement;

    if(locationPath){
      locationString=locationPath[1]
    }
    if (locationString) {
      navElement = document.getElementById(locationString);
    }else{ 
      navElement = document.getElementById('home');
    }
    if (navElement) {
      setActiveTabWidth(navElement.offsetWidth)
      setNavPosition(navElement.offsetLeft);
    }
    setInterval(
      setShowActive(true)
    ),500
    return(
      clearInterval()
    )
  },[])


  return (
    <div className='relative border-b-2'>

    <div className='flex relative max-w-[400px] gap-x-10 mx-auto justify-center my-10'>
      <div
        className={`' bg-blue-500 absolute   border-2 rounded-2xl h-9 px-3 -z-10 transition-all duration-500 ease-in-out -left-6 py-2 -top-1 ${showActive?'':'hidden'}`}
        style={{ transform: `translateX(${navPosition}px)`, width:`${activeTabWidth?activeTabWidth+50:'4'}px` }}
      ></div>
      <MenuItem menuItemName='Home' menuItemId='home' setNavPosition={setNavPosition} setActiveTabWidth={setActiveTabWidth} />
      <MenuItem menuItemName='Blogs' menuItemId='blogs' setNavPosition={setNavPosition} setActiveTabWidth={setActiveTabWidth} />
      <MenuItem menuItemName='About Us' menuItemId='aboutUs' setNavPosition={setNavPosition} setActiveTabWidth={setActiveTabWidth} />
    </div>
    </div>
  )
}
