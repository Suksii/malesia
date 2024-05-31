import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [sticky, setSticky] = useState(false)
    const path = useLocation().pathname;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    })

    const scrollOnTop = () => {
        window.scrollTo(0, 0)
    }

    const navItems = [
        { name: 'Početna', link: '/' },
        { name: 'Istorija', link: '/istorija' },
        { name: 'Kultura', link: '/kultura' },
        { name: 'Ekonomija', link: '/ekonomija' },
        { name: 'Politika', link: '/politika' },
    ];

    return (
        <>
            <nav className={`hidden md:flex justify-evenly items-center py-4 shadow_box z-50 ${sticky ? 'sticky top-0 bg-white' : 'bg-transparent'} transition-colors duration-500`}>
                {navItems.map((item, index) => {
                        return (
                            <Link to={item.link}
                                  key={index}
                                  onClick={scrollOnTop}
                                  className={`text-xl font-semibold hover:text-blue-500 duration-500 ${path === item.link ? 'text-blue-500' : ''}`}>
                                {item.name}
                            </Link>
                        );
                    })
                }
            </nav>
            <nav className="flex justify-end md:hidden items-center bg-black h-[5vh] px-2">
                <div className="z-50">
                    <button className={toggle ? "menu x" : "menu"}
                            onClick={() => setToggle(prevState => !prevState)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            <div className="relative">
                <div className={`absolute flex flex-col bg-black h-[95vh] text-center left-0 right-0 ${toggle ? 'translate-y-0 opacity-100' : '-translate-y-[100vh] opacity-0'} duration-1000 z-50`}>
                    {navItems.map((item, index) => {
                        return (
                            <Link to={item.link}
                                  key={index}
                                  className="text-xl text-white hover:bg-gray-300 hover:text-black w-full flex-grow flex justify-center items-center duration-500"
                                  onClick={() => {
                                      setToggle(false);
                                      scrollOnTop();
                                  }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;