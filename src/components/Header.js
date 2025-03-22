import React,{useState,useEffect} from 'react';
import { headerData } from '../data';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';
import{} from 'react-icons/ti'
import {TiThMenuOutline} from 'react-icons/ti'




const Header = () => {
  const {logo} = headerData;

  const [isActive, setIsActive]= useState(false);
  
  const [NavMobile, setNavMobile]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setIsActive(true): setIsActive(false);
    })
  })
  return <header className={`${isActive? 'bg-red-500 h-[100px] lg:h-[100px] shadow-lg': 'bg-green-500 h-[120px] lg:h-[150px]'}
  fixed left-0 right-o top-0 z10 max-w-[1920px] w-full mx-auto transition-all duration-300
  `}>Header</header>;
};

export default Header;
