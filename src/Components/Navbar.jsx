import React, { useState } from 'react';
import { IoIosCloseCircleOutline, IoMdMenu } from "react-icons/io";
const user = {
    name: "John Doe",
    email: "Y0vHl@example.com",
    image: "https://i.ibb.co/bRYjqzXg/pexels-pixabay-56866.jpg",
};

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        // Handle menu click event
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className='flex justify-between items-center bg-gray-100 p-4'>
                <div className='flex  items-center gap-2'>
                    <img className='w-10 rounded-2xl h-10' src={user.image} alt="logo" />
                    <h1 className='sm:text-3xl text-xl font-bold'>Awesome Flowers</h1>
                </div>
                <div className='sm:flex items-center gap-4 hidden'>
                    {links.map((link, index) => (
                        <a key={index} href={link.path} className='text-xl font-semibold'>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className='sm:flex items-center gap-2 hidden'>

                    <img className='w-10 rounded-2xl h-10' src={user.image ? user.image : "https://i.ibb.co/bRYjqzXg/pexels-pixabay-56866.jpg"} alt="profile" />
                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
                </div>
                <button onClick={handleMenuClick} className='sm:hidden'>{isOpen ? <IoIosCloseCircleOutline size={30} /> : <IoMdMenu size={30} />} </button>
            </div>
            {isOpen && (
                <div className='flex flex-col gap-2 bg-gray-100  p-4'>
                    <div className='flex justify-between gap-2 p-4'>
                       <div className='flex flex-col gap-2'>
                         {links.map((link, index) => (
                            <a key={index} href={link.path} className='text-xl font-semibold'>
                                {link.name}
                            </a>
                        ))}
                       </div>
                        <img className='w-10 rounded-2xl h-10' src={user.image ? user.image : "https://i.ibb.co/bRYjqzXg/pexels-pixabay-56866.jpg"} alt="profile" />
                       
                    </div>
                    
 <button className='bg-blue-500 btn btn-block text-white px-4 py-2 rounded'>Login</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;