import { TfiGithub } from "react-icons/tfi";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";
import { SiGmail, SiThreads } from "react-icons/si";
import { LuLinkedin } from "react-icons/lu";
import { SlSocialSpotify } from "react-icons/sl";
import { useSwipeable } from "react-swipeable";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { useRef } from "react";



const Nav = () => {
    // const windowSize = useRef([window.innerWidth, window.innerHeight]);
// const [navPos, setNavPos] = useState(windowSize.current[1] - 100)
const [navOpen, setNavOpen] = useState(false)


console.log(navOpen);
  const handlers = useSwipeable({
    onSwipedUp: (eventData) => {console.log("User swiped up!", eventData), setNavOpen( true)}, 
       onSwipedDown: (eventData) => {console.log("User swiped down!", eventData), setNavOpen( false)},

    
  });
    const navLinks = [{title:"home", href:"/", icon:"🏠"},
    {title:"writing", href:"/writing", icon:"✒︎"},
    {title:"projects", href:"/projects", icon:"✨"},
    {title:"tools", href:"/tools", icon:"🔧"},
    {title:"bookmarks", href:"/bookmarks", icon:"🔖"},]
    
    const socialLinks = [
    {title:"gmail", href:"https://github.com/TohirBabs", icon:<SiGmail/>},  
    {title:"github", href:"https://github.com/TohirBabs", icon:<TfiGithub/>},
    {title:"X/twitter", href:"https://twitter.com/BabsTohir", icon:<FaXTwitter/>},
    {title:"whatsapp", href:"https://twitter.com/BabsTohir", icon:<FaWhatsapp/>},
    {title:"linkedin", href:"https://www.linkedin.com/in/tohir-babs-6a0045167/", icon:<LuLinkedin/>},
    {title:"spotify", href:"https://open.spotify.com/user/e48xr1tcz09muuqh1oski4qme", icon:<SlSocialSpotify/>},
    {title:"threads", href:"https://www.threads.net/@dev_panda42", icon:<SiThreads/>},
    {title:"pinterest", href:"https://www.pinterest.com/tohirbabs/", icon:<ImPinterest2/>},]
    


const NavButton = ({link}) => {
    return <NavLink exact to={link.href} className={({isActive})=>`flex gap-3  transition cursor-pointer  p-2  rounded-md items-center justify-between 
    ${isActive ? "text-white bg-slate-900 hover:bg-slate-900 font-semibold hover:text-white":"hover:bg-slate-200"}`}>
    <div className="flex text-sm items-center gap-2">
    <div className="">
      {link.icon}
    </div>
    {link.title}
    </div>
    
    </NavLink>
      }
    
    
      const SocialLink = ({link}) => {
        return <a href={link.href} className="flex gap-3 hover:bg-slate-300 transition cursor-pointer  p-2  rounded-md items-center justify-between">
          <div className="flex items-center gap-2 font-semibold ">
          <div className="text-base">
            {link.icon}
          </div>
           {link.title}
          </div>
          <HiOutlineArrowUpRight/>     
        </a>
          }
    
    return (
        <div
      {...handlers}
      style={{top: !navOpen ? "80vh":"30vh" }}
          className="absolute z-30 lg:static h-[80vh] w-screen transition-all backdrop-blur lg:backdrop-blur-none overflow-y-auto rounded-t-3xl lg:rounded-t-none flex flex-col gap-3  p-1 lg:w-64 lg:h-screen lg:bg-slate-50 bg-white/80  lg:border-r border">
        <div 
       className="flex justify-center  lg:hidden">
          <div className="w-16 h-1 rounded-full bg-slate-800 animate-bounce mt-2"></div>
        </div>
        <div className="flex items-center gap-2">
        <a href="/" className="flex flex-1 hover:bg-slate-200 p-1 rounded-lg items-center gap-2">
          <img src="/selfai.png" alt="" className="w-12 h-12 rounded-md bg-slate-500" />
          <div className="leading-tight">
            <h1 className="font-semibold text-base">Tohir Babátúndé</h1>
            <h2>ui developer</h2>
          </div>
        </a>
        </div>  
        <div className="flex flex-col text-sm  ">
          {navLinks.map((link, index) => <NavButton key={index} link={link}/>)}
        </div>
        <div className="flex text-sm flex-col gap-1">
          <p className="px-2 text-slate-700">online</p>
          {socialLinks.map((link, index) => <SocialLink key={index} link={link}/>)}
        </div>
      </div>
    )
}

export default Nav