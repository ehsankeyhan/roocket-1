import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  const [navPosition, setNavPosition] = useState(); // Initial position
  const [activeTabWidth, setActiveTabWidth] = useState(); // Initial position
  const [showActive, setShowActive] = useState(false); // Initial position

  useEffect(()=>{
    const navElement = document.getElementById('home');
    setActiveTabWidth(navElement.offsetWidth)
    if (navElement) {
      setNavPosition(navElement.offsetLeft);
    }
    setInterval(
      setShowActive(true)
    ),500
    return(
      clearInterval()
    )
  },[])
  const handleSetActiveTab = (tabId) => {
    const navElement = document.getElementById(tabId);

    setActiveTabWidth(navElement.offsetWidth)
    console.log(navElement.offsetWidth);
    if (navElement) {
      setNavPosition(navElement.offsetLeft);
    }
  };
  console.log(activeTabWidth);

  return (
    <div className='relative'>

    <div className='flex relative max-w-[400px] gap-x-10 mx-auto justify-center my-10'>
    <div
          className={`' bg-blue-500 absolute   border-2 rounded-2xl h-9 px-3 -z-10 transition-all duration-500 ease-in-out -left-3 py-2 -top-2 ${showActive?'':'hidden'}`}
          style={{ transform: `translateX(${navPosition}px)`, width:`${activeTabWidth?activeTabWidth+20:'4'}px` }}
        ></div>
      <NavLink
      id='home'
        to="/"
        className={ ({ isActive, isPending }) =>
        isPending ? "font-bold" : isActive ? "text-white transition-all duration-500 ease-in-out text-sm " : "text-sm"
        }
        onClick={(match, location) => handleSetActiveTab('home')}

      >
        Home
      </NavLink>
      <NavLink
      id='posts'
        to="/posts"
        className={({ isActive, isPending }) =>
        isPending ? "font-bold" : isActive ? "text-white transition-all duration-500 ease-in-out text-sm " : "text-sm"
      }
      onClick={(match, location) => handleSetActiveTab('posts')}

      >
        Posts
      </NavLink>
      <NavLink
      id='aboutUs'
        to="/aboutUs"
        className={({ isActive, isPending }) =>
        isPending ? "font-bold" : isActive ? "text-white transition-all duration-500 ease-in-out text-sm " : "text-sm"
      }
        onClick={(match, location) => handleSetActiveTab('aboutUs')}
      >
        About Us
      </NavLink>
    </div>
    </div>
  )
}
