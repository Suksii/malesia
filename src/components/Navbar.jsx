import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const navItems = [
        { name: 'Početna', link: '/' },
        { name: 'Istorija', link: '/istorija' },
        { name: 'Kultura', link: '/kultura' },
        { name: 'Ekonomija', link: '/ekonomija' },
        { name: 'Politika', link: '/politika' },
    ];

    return (
        <>
            <nav className="hidden md:flex justify-evenly items-center py-4 shadow_box">
                {navItems.map((item, index) => {
                        return (
                            <Link to={item.link} key={index} className="text-xl font-semibold hover:text-blue-800 duration-500">
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
                <div className={`absolute flex flex-col bg-black h-[95vh] text-center left-0 top-0 right-0 ${toggle ? 'translate-y-0 opacity-100' : '-translate-y-[100vh] opacity-0'} duration-1000 z-50`}>
                    {navItems.map((item, index) => {
                        return (
                            <Link to={item.link}
                                  key={index}
                                  className="text-xl text-white hover:bg-gray-300 hover:text-black w-full flex-grow flex justify-center items-center duration-500"
                                  onClick={() => setToggle(false)}
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