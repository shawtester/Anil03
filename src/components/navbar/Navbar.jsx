import { Fragment, useContext, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import myContext from '../../context/data/myContext';
import { RxCross2 } from 'react-icons/rx';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false); // State for the side menu
  const [isFocused, setIsFocused] = useState(false); // State to manage search bar focus
  const context = useContext(myContext);
  const { toggleMode, mode } = context;
  
  // Retrieve user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user); // Debugging: Check the user object

  // Logout function to clear localStorage
  const logout = () => {
    localStorage.clear('user');
    window.location.href = "/";
  }

  return (
    <div className="sticky top-0 z-50 shadow-lg">
      {/* Mobile Side Menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative w-64 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 h-screen z-50">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="rounded-md p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setOpen(false)}
                  >
                    <RxCross2 size={24} />
                  </button>
                </div>
                <nav className="mt-4 space-y-6">
                  <Link to="/order" className="block text-lg font-medium">
                    Order
                  </Link>
                  {user?.user?.email === 'knupadhyay784@gmail.com' && (
                    <Link to="/dashboard" className="block text-lg font-medium">
                      Admin
                    </Link>
                  )}
                  {user ? (
                    <a onClick={logout} className="block text-lg font-medium cursor-pointer">
                      Logout
                    </a>
                  ) : (
                    <Link to="/signup" className="block text-lg font-medium">
                      Signup
                    </Link>
                  )}
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop Navbar */}
      <header className="relative bg-white dark:bg-gray-900 z-30 rounded-2xl shadow-lg">
        <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8 third-color transition-all duration-300 hover:text-lg">
          Apply Coupon Code & Get Extra Off
        </p>

        <nav className="container mx-auto flex flex-col items-start py-4 px-6 lg:flex-row lg:justify-between">
          <div className="flex items-center w-full">
            <Link to="/" className="text-3xl font-bold text-black dark:text-white hover:text-green-500 transition duration-300 mb-2 lg:mb-0">
              E-Bharat
            </Link>

            {/* Search Bar positioned beside E-Bharat */}
            <div className="relative flex items-center ml-4 w-full lg:w-1/2 mb-4">
              <input
                type="text"
                placeholder="Search..."
                className={`transition-all duration-300 ease-in-out h-12 px-4 text-xl font-bold text-gray-900 dark:text-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  isFocused ? 'w-full' : 'w-1/2'
                }`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>

            {/* Menu Icon for Mobile */}
            <div className="flex items-center lg:hidden ml-auto">
              <button onClick={() => setOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-900 dark:text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2 mt-4 lg:mt-0 px-8">
            <img
              src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
              alt="India Flag"
              className="h-6"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-white">INDIA</span>
            <Link to="/order" className="nav-link hover:text-white transition duration-300">
              Order
            </Link>
            {user?.user?.email === 'knupadhyay784@gmail.com' && (
              <Link to="/dashboard" className="nav-link hover:text-white transition duration-300">
                Admin
              </Link>
            )}
            {user ? (
              <a onClick={logout} className="nav-link hover:text-white transition duration-300 cursor-pointer">
                Logout
              </a>
            ) : (
              <Link to="/signup" className="nav-link hover:text-white transition duration-300">
                Signup
              </Link>
            )}
          </div>

          <div className="hidden lg:flex items-center space-x-4 mt-4 lg:mt-0">
            {/* Flag Icon for Desktop */}
            <button onClick={toggleMode} className="p-2">
              {mode === 'light' ? (
                <FiSun size={28} className="text-yellow-500" />
              ) : (
                <BsFillCloudSunFill size={28} className="text-blue-300" />
              )}
            </button>

            <Link to="/cart" className="group flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-900 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
