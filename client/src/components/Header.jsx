import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { theme } = useSelector((state) => state.theme);
    const handleSignout = async () => {
        try {
          const res = await fetch('/api/user/signout', {
            method: 'POST',
          });
          const data = await res.json();
          if (!res.ok) {
            console.log(data.message);
          } else {
            dispatch(signoutSuccess());
          }
        } catch (error) {
          console.log(error.message);
        }
      };


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
            <Button
                className='w-12 h-10 hidden sm:inline'
                color='gray'
                pill
                onClick={() => dispatch(toggleTheme())}
            >
                {theme === 'light' ? <FaSun /> : <FaMoon />}
            </Button>

                {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
           <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (

                <Link to='/sign-in'>
                    <Button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-0.5 text-center me-2 mb-2" pill >
                        Sign In
                    </Button>
                </Link>
               
            )}
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
