import { Button, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <div className="flex items-center">
                <Link 
                    to='/' 
                    className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center'
                >
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                        Spark
                    </span>
                    <span className="ml-2">Blog</span>
                </Link>
            </div>
            <div className="hidden lg:flex grow justify-center mx-4 items-center">
                <input
                    type='text'
                    placeholder='Search...'
                    className='border border-gray-300 rounded-l-lg p-2 w-80'
                />
                <button className='bg-gray-300 border border-gray-300 border-l-0 rounded-r-lg p-2'>
                    <AiOutlineSearch />
                </button>
            </div>
            <div className="flex gap-5 items-center md:order-2">
                <Button className='hidden sm:inline' color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to='/sign-in'>
                    <Button className='purpleToBlue px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-lg text-white' color='gray' pill >
                        Sign In
                    </Button>
                </Link>
                <Button className='lg:hidden' color='gray' pill>
                    <AiOutlineSearch />
                </Button>
                <Navbar.Toggle />
            </div>
            
            
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/' className='block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 mr-8'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about' className='block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 mr-8'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects' className='block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
